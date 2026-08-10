import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { categories, categoryUrls, productFromHash, products, projects, routeFor, type Product } from './productData';

const logo = 'https://duracube.com.au/wp-content/uploads/2025/01/screenshot-2025-02-10-at-25953pm.png';
const fallbackImage = 'https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-overhead-braced-pob.jpg';

const breadcrumbLabel = (product: Product) => product.name
  .replace(/\s*\([^)]*\)\s*$/, '')
  .replace(/\s*[–-]\s*/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

function ProductImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(event) => {
        const image = event.currentTarget;
        if (image.src !== fallbackImage) image.src = fallbackImage;
      }}
    />
  );
}

function Accordion({ label, children, open = false }: { label: string; children: ReactNode; open?: boolean }) {
  const [expanded, setExpanded] = useState(open);
  return (
    <div className={`accordion ${expanded ? 'is-open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
        <span>{label}</span>
        <span className="accordion-symbol">{expanded ? '−' : '+'}</span>
      </button>
      <div className="accordion-panel" hidden={!expanded}>{children}</div>
    </div>
  );
}

function MegaMenu({ open, close }: { open: boolean; close: () => void }) {
  const [query, setQuery] = useState('');
  const visible = products.filter((item) => `${item.name} ${item.code} ${item.category}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`mega-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="mega-menu-inner">
        <div className="mega-menu-heading">
          <div>
            <p className="eyebrow">Complete product library</p>
            <h2>Explore all systems</h2>
          </div>
          <label className="product-search">
            <Search size={17} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products or codes" />
          </label>
        </div>
        <div className="mega-grid">
          {categories.map((category) => {
            const categoryProducts = visible.filter((item) => item.category === category);
            if (!categoryProducts.length) return null;
            return (
              <section className="mega-column" key={category}>
                <h3>{category}</h3>
                <div className="mega-links">
                  {categoryProducts.map((item) => (
                    <a key={item.slug} href={routeFor(item)} onClick={close}>
                      <ProductImage src={item.image} alt="" />
                      <span><strong>{item.code}</strong>{item.name.replace(/.*[–-]\s*/, '').replace(/\s*\([^)]*\).*$/, '') || item.name}</span>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        {!visible.length && <p className="empty-search">No matching product. Try a system code such as POB, LPM or VB520.</p>}
      </div>
    </div>
  );
}

function Header({ product }: { product: Product }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [product.slug]);

  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="brand" href={routeFor(products[0])} aria-label="DuraCube home mock-up"><img src={logo} alt="DuraCube" /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="https://duracube.com.au/about/">About</a>
          <button
            className="products-trigger"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
          >
            Products <ChevronDown size={14} />
          </button>
          <a href="https://duracube.com.au/colours/">Colours</a>
          <a href="https://duracube.com.au/inspiration/case-study/">Inspiration</a>
          <a href="https://duracube.com.au/resources/">Resources</a>
          <a href="https://duracube.com.au/contact/">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="https://duracube.com.au/login/">Login</a>
          <a className="button button-dark header-quote" href="https://duracube.com.au/send-us-your-plans/">Send us your plan</a>
          <button className="mobile-toggle" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <MegaMenu open={menuOpen} close={() => setMenuOpen(false)} />
      {mobileOpen && (
        <div className="mobile-menu">
          <p className="eyebrow">Products</p>
          {categories.map((category) => (
            <details key={category} open={category === product.category}>
              <summary>{category}</summary>
              {products.filter((item) => item.category === category).map((item) => (
                <a key={item.slug} href={routeFor(item)}>{item.code} · {item.name}</a>
              ))}
            </details>
          ))}
        </div>
      )}
    </header>
  );
}

function ProductPage({ product }: { product: Product }) {
  const siblings = useMemo(
    () => products.filter((item) => item.category === product.category && item.slug !== product.slug),
    [product.category, product.slug],
  );
  const recommended = siblings.slice(0, 4);
  const projectOffset = categories.indexOf(product.category) % Math.max(1, projects.length - 2);
  const relatedProjects = [...projects.slice(projectOffset, projectOffset + 3), ...projects].slice(0, 3);
  const [comparisonSlugs, setComparisonSlugs] = useState(() => siblings.slice(0, 2).map((item) => item.slug));
  const [stickyVisible, setStickyVisible] = useState(false);
  const lastScrollY = useRef(0);
  const selectedComparisons = comparisonSlugs
    .map((slug) => siblings.find((item) => item.slug === slug))
    .filter((item): item is Product => Boolean(item));
  const comparisonItems = [product, ...selectedComparisons];
  const categoryUrl = categoryUrls[product.category];

  useEffect(() => {
    document.title = product.title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', product.meta);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [product]);

  useEffect(() => {
    setComparisonSlugs(siblings.slice(0, 2).map((item) => item.slug));
  }, [siblings]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > 400 && currentScrollY < lastScrollY.current;
      setStickyVisible(shouldShow);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header product={product} />
      <main>
        <section className="hero section-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="https://duracube.com.au/">Home</a><span>/</span><a href={categoryUrl}>{product.category}</a><span>/</span><span>{breadcrumbLabel(product)}</span>
          </nav>
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">{product.category}</p>
              <h1>{product.h1}</h1>
              <p className="hero-intro">{product.intro}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="https://duracube.com.au/send-us-your-plans/">Send us your plan <ArrowRight size={16} /></a>
                <a
                  className="button button-outline"
                  href="#related-projects"
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById('related-projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >View projects</a>
              </div>
              <div className="downloads">
                <span>Downloads</span>
                <a href="https://duracube.com.au/resources/revit-models/"><Download size={16} /> Revit files</a>
                <a href="https://duracube.com.au/resources/downloads/"><FileText size={16} /> Data sheet</a>
              </div>
            </div>
            <div className="hero-visual reveal reveal-late">
              <div className="hero-code">{product.code}</div>
              <ProductImage src={product.image} alt={product.imageAlt} />
              <span className="image-caption">Live product imagery · duracube.com.au</span>
            </div>
          </div>
        </section>

        <section className="overview-band">
          <div className="section-shell overview-grid">
            <article className="overview-card">
              <p className="eyebrow">System overview</p>
              <h2>Built around the way the space is used.</h2>
              <p>{product.intro}</p>
              <div className="trust-grid">
                <div><strong>&gt;200k</strong><span>Installations completed since 1987</span></div>
                <div><strong>95%</strong><span>Customer satisfaction, 2024 survey</span></div>
              </div>
            </article>
            <article className="spec-card">
              <p className="eyebrow">Technical detail</p>
              <h2>Key specifications</h2>
              <div className="accordion-list">
                <Accordion label="Features" open><ul>{product.features.map((item) => <li key={item}>{item}</li>)}</ul></Accordion>
                <Accordion label="Benefits"><ul>{product.benefits.map((item) => <li key={item}>{item}</li>)}</ul></Accordion>
                <Accordion label="Applications"><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></Accordion>
                <Accordion label="How to specify"><div className="specification">{product.specification.map((line) => <p key={line}>{line}</p>)}</div></Accordion>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell finishes-section">
          <div className="section-heading">
            <div><p className="eyebrow">Finishes & materials</p><h2>A coordinated palette, from cubicle to change room.</h2></div>
            <a className="text-link" href="https://duracube.com.au/colours/">View all colours <ArrowRight size={15} /></a>
          </div>
          <div className="swatch-grid">
            {[
              ['#accbd5', 'Sky', 'DuraSafe solid'],
              ['#8caa8b', 'Sage Green', 'DuraSafe solid'],
              ['#62483a', 'Native Walnut', 'DuraSafe timber'],
              ['#202529', 'Midnight', 'DuraSafe solid'],
            ].map(([colour, name, type]) => (
              <article className="swatch" key={name}><div style={{ background: colour }} /><h3>{name}</h3><p>{type}</p></article>
            ))}
          </div>
        </section>

        <section className="recommended-section">
          <div className="section-shell">
            <div className="section-heading">
              <div><p className="eyebrow">Keep exploring</p><h2>Recommended {product.category.toLowerCase()}</h2></div>
              <a className="section-count" href={categoryUrl} aria-label={`View all ${product.category}`}>
                {siblings.length.toString().padStart(2, '0')} alternatives <ArrowRight size={18} />
              </a>
            </div>
            <div className="product-card-grid">
              {recommended.map((item) => (
                <a className="product-card" href={routeFor(item)} key={item.slug}>
                  <div className="product-card-image"><ProductImage src={item.image} alt={item.imageAlt} /><span>{item.code}</span></div>
                  <div><p>{item.category}</p><h3>{item.name}</h3><span className="card-arrow"><ArrowRight /></span></div>
                </a>
              ))}
              {!recommended.length && <div className="empty-card">Additional related products can be added here once confirmed.</div>}
            </div>
          </div>
        </section>

        <section id="related-projects" className="section-shell projects-section">
          <div className="section-heading">
            <div><p className="eyebrow">In the field</p><h2>Related projects</h2></div>
            <a className="text-link" href="https://duracube.com.au/inspiration/case-study/">All case studies <ExternalLink size={14} /></a>
          </div>
          <div className="placeholder-note"><Sparkles size={15} /><span>Relevant live case studies shown. Confirm product-level tagging with the DuraCube team before development.</span></div>
          <div className="project-grid">
            {relatedProjects.map((project) => (
              <a className="project-card" href="https://duracube.com.au/inspiration/case-study/" key={project.name}>
                <ProductImage src={project.image} alt={project.name} />
                <div><p>{project.sector}</p><h3>{project.name}</h3><ArrowRight /></div>
              </a>
            ))}
          </div>
        </section>

        {siblings.length > 0 && (
          <section className="compare-band">
            <div className="section-shell compare-inner">
              <div className="compare-copy"><p className="eyebrow">Compare systems</p><h2>Choose the right configuration.</h2><p>Review adjacent systems from the same product family without leaving the mock-up.</p></div>
              <div
                className="compare-table"
                role="table"
                aria-label={`Compare ${product.name}`}
                style={{ '--compare-columns': comparisonItems.length } as CSSProperties}
              >
                {comparisonItems.map((item, index) => {
                  const selectorIndex = index - 1;
                  const availableOptions = siblings.filter((option) => (
                    option.slug === item.slug || !comparisonSlugs.some((slug, slot) => slot !== selectorIndex && slug === option.slug)
                  ));

                  return (
                  <article className={`compare-column ${index === 0 ? 'current' : ''}`} key={`${index}-${item.slug}`}>
                    {index === 0 ? (
                      <span className="compare-kicker">Current system</span>
                    ) : (
                      <label className="compare-selector">
                        <span>Compare with</span>
                        <span className="compare-select-control">
                          <select
                            value={item.slug}
                            onChange={(event) => setComparisonSlugs((current) => current.map((slug, slot) => (
                              slot === selectorIndex ? event.target.value : slug
                            )))}
                            aria-label={`Select comparison product ${index}`}
                          >
                            {availableOptions.map((option) => (
                              <option value={option.slug} key={option.slug}>{option.code} · {option.name}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} aria-hidden="true" />
                        </span>
                      </label>
                    )}
                    <ProductImage src={item.image} alt="" />
                    <strong>{item.code}</strong>
                    <p>{item.name}</p>
                    <ul>{item.features.slice(0, 3).map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                    <a className="compare-view-link" href={routeFor(item)}>View product <ArrowRight size={14} /></a>
                  </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="cta-band">
          <div className="section-shell cta-inner">
            <ShieldCheck size={38} />
            <div><p className="eyebrow">Specify with confidence</p><h2>Send us your plan. We’ll help build the system around it.</h2></div>
            <a className="button button-light" href="https://duracube.com.au/send-us-your-plans/">Start your project <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <aside className={`sticky-cta ${stickyVisible ? 'is-visible' : ''}`} aria-hidden={!stickyVisible}>
        <div className="section-shell sticky-cta-inner">
          <div>
            <strong>Ready to start your project?</strong>
            <span>Get precise specifications and quotes for your floorplan.</span>
          </div>
          <a className="button button-dark" href="https://duracube.com.au/send-us-your-plans/">Send us your plan <ArrowRight size={15} /></a>
        </div>
      </aside>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div><img src={logo} alt="DuraCube" /><p>Commercial wet-area systems, engineered and manufactured in Australia.</p></div>
        <div><p className="footer-label">Products</p><a href={routeFor(products[0])}>Partitioning</a><a href={routeFor(products[10])}>Lockers</a><a href={routeFor(products[22])}>Bench seating</a></div>
        <div><p className="footer-label">Project support</p><a href="https://duracube.com.au/resources/">Resources</a><a href="https://duracube.com.au/inspiration/case-study/">Case studies</a><a href="https://duracube.com.au/contact/">Contact</a></div>
        <div><p className="footer-label">Australia</p><a href="tel:1300387228">1300 387 228</a><a href="mailto:sales@duracube.com.au">sales@duracube.com.au</a></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} DuraCube</span><span>Expanded product page mock-up</span></div>
    </footer>
  );
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener('hashchange', update);
    if (!window.location.hash) window.location.hash = routeFor(products[0]).slice(1);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const activeProduct = useMemo(() => productFromHash(hash), [hash]);
  return <ProductPage product={activeProduct} />;
}
