import React, { useState, useEffect } from 'react';
import { Search, Download, FileText, CheckCircle2, DraftingCompass } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 last:border-0 py-4 accordion-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:opacity-80 transition-opacity group"
      >
        <span className="uppercase text-sm font-bold text-slate-800 tracking-wider font-sans">{title}</span>
        <span className={`text-lg font-bold ${isOpen ? 'text-blue-600' : 'text-slate-400'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-xs text-slate-600 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

const comparisonProducts = [
  { id: 'pcf', name: 'Pedestal Mount - Ceiling Fixed (PCF)', url: 'https://duracube.com.au/product/pedestal-mount-ceiling-fixed-pcf/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-ceiling-fixed-pcf-1-330x260.jpg', mounting: 'Floor Pedestal & Ceiling Fixed', clearance: '200mm Floor Clearance', privacy: 'Standard', traffic: 'High Traffic' },
  { id: 'fob', name: 'Floor Mount - Overhead Braced (FOB)', url: 'https://duracube.com.au/product/floor-mount-overhead-braced/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/floor-mount-overhead-braced-fob-330x260.jpg', mounting: 'Floor Mounted & Headrail', clearance: 'No Floor Clearance', privacy: 'High', traffic: 'Extreme Traffic' },
  { id: 'fcf', name: 'Floor Mount - Ceiling Fixed (FCF)', url: 'https://duracube.com.au/product/floor-mount-ceiling-fixed/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/floor-mount-ceiling-fixed-fcf-330x260.jpg', mounting: 'Floor & Ceiling Fixed', clearance: 'No Floor Clearance', privacy: 'High', traffic: 'Extreme Traffic' },
  { id: 'ffs', name: 'Floor Mount - Free Standing (FFS)', url: 'https://duracube.com.au/product/floor-mount-free-standing-3ffs/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/floor-mount-free-standing-ffs-330x260.jpg', mounting: 'Floor Mounted (Free Standing)', clearance: 'No Floor Clearance', privacy: 'High', traffic: 'Moderate Traffic' },
  { id: 'fhpc', name: 'Full Height - Privacy Core (FHPC)', url: 'https://duracube.com.au/product/privacy-core-partition/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/full-height-privacy-core-fhpc-1-330x260.jpg', mounting: 'Floor to Ceiling', clearance: 'No Floor Clearance', privacy: 'Ultimate', traffic: 'High Traffic' },
  { id: 'fhpu', name: 'Full Height - Privacy Ultra (FHPU)', url: 'https://duracube.com.au/product/full-height-privacy-ultra-fhpu/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/full-height-privacy-ultra-fhpu-1-330x260.jpg', mounting: 'Floor to Ceiling', clearance: 'No Floor Clearance', privacy: 'Ultimate', traffic: 'High Traffic' },
  { id: 'fhpm', name: 'Full Height - Privacy Max (FHPM)', url: 'https://duracube.com.au/product/full-height-privacy-max/', image: 'https://duracube.com.au/wp-content/uploads/2017/01/partition-full-height-privacy-max02-1-scaled-330x260.jpg', mounting: 'Floor to Ceiling', clearance: 'No Floor Clearance', privacy: 'Maximum', traffic: 'Extreme Traffic' },
  { id: 'fhsc', name: 'Full Height Self-Contained (FHS-C)', url: 'https://duracube.com.au/product/full-height-self-contained/', image: 'https://duracube.com.au/wp-content/uploads/2026/02/full-height-self-contained-no-cleaners-closet-render-1-330x260.png', mounting: 'Floor to Ceiling', clearance: 'No Floor Clearance', privacy: 'Maximum', traffic: 'Extreme Traffic' },
];

export default function App() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [compareId, setCompareId] = useState('fob');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSectionHeight = 400;
      
      if (currentScrollY > heroSectionHeight) {
        if (currentScrollY < lastScrollY) {
          setIsStickyVisible(true);
        } else {
          setIsStickyVisible(false);
        }
      } else {
        setIsStickyVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const selectedCompareProduct = comparisonProducts.find(p => p.id === compareId);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <div className="flex justify-between items-center w-full max-w-[1920px] mx-auto">
          <a href="#" className="flex items-center">
             <img src="https://duracube.com.au/wp-content/uploads/2025/01/screenshot-2025-02-10-at-25953pm.png" alt="Duracube Logo" className="h-[48px] object-contain" />
          </a>
          
          <nav className="hidden md:flex gap-8 font-medium text-sm w-auto justify-center uppercase tracking-wider text-slate-600">
            <a href="#" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#" className="text-blue-700 border-b-2 border-blue-700 pb-1">Products</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Colours</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Inspiration</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Resources</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-blue-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a href="#" className="text-slate-600 font-medium text-sm uppercase tracking-wider hover:text-blue-700 transition-colors hidden sm:block">Login</a>
            <a href="#" className="bg-black text-white px-6 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">
              Send Us Your Plan
            </a>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 font-medium text-xs tracking-wider text-slate-400 uppercase">
          <a href="#" className="hover:text-slate-800 transition-colors duration-200">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-slate-800 transition-colors duration-200">Partitioning Systems</a>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-bold">POB</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Commercial Solutions</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mt-2 mb-4 leading-tight tracking-tight">
                Pedestal Mount Overhead Braced (POB)
              </h1>
            </div>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Engineered for high-traffic environments, the POB system offers unparalleled stability and a sleek, industrial aesthetic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-black text-white py-4 px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center">
                Send Us Your Plan
              </button>
              <a href="#featured-projects" className="flex-1 bg-white border-2 border-black text-black py-4 px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center text-center">
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-6 border-t border-slate-200 pt-6">
              <span className="text-xs font-bold text-black uppercase tracking-widest">Downloads:</span>
              <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">
                <Download className="w-4 h-4" /> Revit Files
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">
                <FileText className="w-4 h-4" /> Data Sheet
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-2 text-center shadow-sm border border-slate-200 h-[300px] md:h-[450px]">
              <img 
                src="https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-overhead-braced-pob.jpg" 
                alt="Pedestal Mount Overhead Braced washroom cubicle system" 
                className="w-full h-full object-cover shadow-inner"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 min-h-[500px]">
          {/* Description & Trust Stats */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 flex-1">
              <h2 className="font-bold text-2xl text-black mb-6">System Overview</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The Pedestal Mount - Overhead Braced (POB) system is our most popular and versatile partitioning solution. Designed to provide exceptional structural integrity in demanding environments, the overhead bracing ensures superior rigidity.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Constructed with premium materials and heavy-duty hardware, the POB system is built to withstand rigorous daily use while maintaining a clean, modern appearance. The pedestal mounts allow for easy floor cleaning and maintenance, making it suitable for commercial, educational, and industrial facilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm p-6 flex flex-col justify-center items-center text-center">
                <DraftingCompass className="w-8 h-8 text-black mb-4 border p-1.5 border-slate-200 bg-slate-50" />
                <h3 className="font-bold text-4xl text-black mb-2 tracking-tighter">&gt;200k</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Installations Complete</p>
              </div>
              
              <div className="bg-white border border-slate-200 shadow-sm p-6 flex flex-col justify-center items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-black mb-4 border p-1.5 border-slate-200 bg-slate-50" />
                <h3 className="font-bold text-4xl text-black mb-2 tracking-tighter">95%</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Key Benefits Accordion */}
          <div className="flex flex-col justify-start">
            <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 flex-1">
              <h2 className="font-bold text-2xl text-black mb-4">Key Specifications</h2>
              <div className="flex flex-col w-full border-t border-slate-200 mt-2">
                <AccordionItem title="Features" defaultOpen={true}>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Heavy-duty clear anodised aluminium headrail bracing</li>
                    <li>Adjustable pedestal legs offering ground clearance for deep cleaning</li>
                    <li>Concealed tamper-resistant fixings for enhanced security</li>
                    <li>Available in 13mm Compact Laminate or 18mm/32mm MR MDF</li>
                    <li>Sleek, robust structural hardware built to handle continuous traffic</li>
                  </ul>
                </AccordionItem>
                
                <AccordionItem title="Benefits">
                  <p className="mb-3 mt-1">
                    The POB configuration is engineered to deliver maximum value over its lifetime:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Maximum Durability:</strong> Engineered with high-grade components to resist impact and wear.</li>
                    <li><strong>Easy Maintenance:</strong> Pedestal mounting provides clear access for efficient floor mopping.</li>
                    <li><strong>Rigid Stability:</strong> The overhead bracing ties the entire cubicle bank together, preventing lateral movement.</li>
                  </ul>
                </AccordionItem>
                
                <AccordionItem title="Application">
                  <p className="mb-3 mt-1">
                    This system's robust design makes it the universal standard for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Schools, Universities and Educational facilities</li>
                    <li>High-traffic Shopping Centers</li>
                    <li>Office buildings and Commercial hubs</li>
                    <li>Public restrooms, Parks and Recreation areas</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="How to Specify">
                  <p className="mb-3 mt-1">Ensure precise integration into your architectural plans by specifying as follows:</p>
                  <div className="bg-slate-50 p-4 border border-slate-200 font-mono text-[11px] leading-relaxed shadow-inner">
                    System: Duracube POB (Pedestal Mount - Overhead Braced)<br/>
                    Board Type: [Select: 13mm Compact Laminate / 18mm MR MDF]<br/>
                    Hardware: Clear Anodised Aluminium standard<br/>
                    Colour: [Refer to Duracube Finishes Selection]
                  </div>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>

        {/* Colours & Materials */}
        <div className="mb-24">
          <div className="mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 pb-4 gap-4 sm:gap-0">
            <div>
              <h2 className="font-bold text-2xl text-black mb-2">Finishes & Materials</h2>
              <p className="text-slate-600 text-sm">Select from our range of premium, industrial-grade finishes designed for longevity and style.</p>
            </div>
            <a href="https://duracube.com.au/colours/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-black transition-colors whitespace-nowrap">
              View All Colours →
            </a>
          </div>
          
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-3 border border-slate-200 shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#333333] mb-4 shadow-inner"></div>
              <h4 className="font-bold text-black text-sm mb-1 line-clamp-1">Charcoal Slate</h4>
              <p className="text-xs text-slate-500">High-Pressure Laminate</p>
            </div>
            
            <div className="bg-white p-3 border border-slate-200 shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#d4c5b9] mb-4 shadow-inner"></div>
              <h4 className="font-bold text-black text-sm mb-1 line-clamp-1">Industrial Oak</h4>
              <p className="text-xs text-slate-500">Compact Density Fiberboard</p>
            </div>
            
            <div className="bg-white p-3 border border-slate-200 shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#e5e7eb] mb-4 shadow-inner"></div>
              <h4 className="font-bold text-black text-sm mb-1 line-clamp-1">Architectural White</h4>
              <p className="text-xs text-slate-500">Solid Color Core</p>
            </div>
            
            <div className="bg-white p-3 border border-slate-200 shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#5f6368] mb-4 shadow-inner"></div>
              <h4 className="font-bold text-black text-sm mb-1 line-clamp-1">Steel Grey</h4>
              <p className="text-xs text-slate-500">Powder Coated Steel</p>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-24 overflow-hidden">
          <div className="mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 pb-4 gap-4 sm:gap-0">
            <div>
              <h2 className="font-bold text-2xl text-black mb-2">Recommended Products</h2>
              <p className="text-slate-600 text-sm">Explore alternative partitioning systems tailored for different facility requirements.</p>
            </div>
            <a href="#compare-systems" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-black transition-colors whitespace-nowrap">
              Compare Systems →
            </a>
          </div>
          
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-8 px-8 md:mx-0 md:px-0">
            {comparisonProducts.map(product => (
              <a key={product.id} href={product.url} className="w-[75vw] sm:w-[280px] group block bg-white p-2 border border-slate-200 shadow-sm hover:shadow-md transition-shadow snap-start shrink-0">
                <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center shadow-inner mb-4 overflow-hidden">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-black text-sm mb-1 group-hover:text-slate-600 transition-colors line-clamp-2">{product.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div id="featured-projects" className="mb-24">
          <div className="mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 pb-4 gap-4 sm:gap-0">
            <div>
              <h2 className="font-bold text-2xl text-black mb-2">Featured Projects</h2>
              <p className="text-slate-600 text-sm">See the POB system in action across premier installations.</p>
            </div>
            <a href="https://duracube.com.au/inspiration/case-study/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-black transition-colors whitespace-nowrap">
              View All Projects →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="group block bg-white p-2 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-overhead-braced-hero-image-1536x1536.png" 
                alt="Educational Facility Washroom" 
                className="w-full aspect-[4/3] object-cover shadow-inner mb-4 opacity-95 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="px-2 pb-2 flex flex-col">
                <h3 className="font-bold text-black text-sm md:text-base group-hover:text-slate-600 transition-colors">Education Sector</h3>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Durasafe® Charcoal</span>
                <p className="text-xs text-slate-500 mt-2">High-traffic robust application</p>
              </div>
            </a>

            <a href="#" className="group block bg-white p-2 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://duracube.com.au/wp-content/uploads/2017/01/1719972563758-1-1536x1536.jpeg" 
                alt="Recreation Reserve Amenities" 
                className="w-full aspect-[4/3] object-cover shadow-inner mb-4 opacity-95 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="px-2 pb-2 flex flex-col">
                 <h3 className="font-bold text-black text-sm md:text-base group-hover:text-slate-600 transition-colors">Recreation Spaces</h3>
                 <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Durasafe® Oak</span>
                 <p className="text-xs text-slate-500 mt-2">Premium community facilities</p>
              </div>
            </a>

            <a href="#" className="group block bg-white p-2 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-overhead-braced-image-2-scaled-1536x1536.jpg" 
                alt="Commercial Office Bathroom" 
                className="w-full aspect-[4/3] object-cover shadow-inner mb-4 opacity-95 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="px-2 pb-2 flex flex-col">
                 <h3 className="font-bold text-black text-sm md:text-base group-hover:text-slate-600 transition-colors">Commercial Fitout</h3>
                 <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Durasafe® Charcoal</span>
                 <p className="text-xs text-slate-500 mt-2">Sleek, modern overhead braced</p>
              </div>
            </a>
          </div>
        </div>

        {/* Product Comparison Section */}
        <div id="compare-systems" className="mb-24">
          <div className="mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 pb-4 gap-4 sm:gap-0">
            <div>
              <h2 className="font-bold text-2xl text-black mb-2">Compare Systems</h2>
              <p className="text-slate-600 text-sm">Compare technical specifications to find the right fit for your floorplan.</p>
            </div>
          </div>
          <div className="-mx-8 px-8 md:mx-0 md:px-0 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            <div className="flex flex-row w-max md:w-full gap-0 border border-slate-200 shadow-sm bg-white">
              {/* Base Product */}
              <div className="w-[85vw] sm:w-[350px] md:w-1/2 p-5 md:p-8 border-r border-slate-200 bg-slate-50 shrink-0 snap-center md:snap-align-none">
              <h3 className="font-bold text-xl text-black mb-6">Pedestal Mount (POB)</h3>
              <div className="w-full h-[120px] bg-slate-100 flex items-center justify-center shadow-inner mb-6 border border-slate-200 overflow-hidden">
                 <img src="https://duracube.com.au/wp-content/uploads/2017/01/pedestal-mount-overhead-braced-pob.jpg" alt="Pedestal Mount Overhead Braced" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Mounting</span>
                  <span className="text-black font-medium">Floor Pedestal & Overhead Brace</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Clearance</span>
                  <span className="text-black font-medium">200mm Floor Clearance</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Privacy Level</span>
                  <span className="text-black font-medium">Standard</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Traffic Suitability</span>
                  <span className="text-black font-medium">High Traffic</span>
                </li>
              </ul>
              <a href="https://duracube.com.au/send-us-your-plans/" className="mt-8 block w-full bg-white border-2 border-black text-black py-4 px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all text-center">
                Get a Quote
              </a>
            </div>
            
            {/* Compare Selector */}
            <div className="w-[85vw] sm:w-[350px] md:w-1/2 p-5 md:p-8 shrink-0 snap-center md:snap-align-none">
              <div className="mb-6">
                <select 
                  className="w-full bg-slate-50 border border-slate-200 text-black text-sm font-bold p-3 outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                  value={compareId}
                  onChange={(e) => setCompareId(e.target.value)}
                >
                  {comparisonProducts.map(product => (
                    <option key={product.id} value={product.id}>Compare with: {product.name}</option>
                  ))}
                </select>
              </div>
              
              {selectedCompareProduct && (
                <div className="opacity-90 transition-opacity">
                  <div className="w-full h-[120px] bg-slate-100 flex items-center justify-center shadow-inner mb-6 border border-slate-200 overflow-hidden">
                     <img src={selectedCompareProduct.image} alt={selectedCompareProduct.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Mounting</span>
                      <span className="text-black font-medium">{selectedCompareProduct.mounting}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Clearance</span>
                      <span className="text-black font-medium">{selectedCompareProduct.clearance}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Privacy Level</span>
                      <span className="text-black font-medium">{selectedCompareProduct.privacy}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">Traffic Suitability</span>
                      <span className="text-black font-medium">{selectedCompareProduct.traffic}</span>
                    </li>
                  </ul>
                  <a href={selectedCompareProduct.url} className="mt-8 block w-full bg-slate-900 text-white py-4 px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center">
                    View this product
                  </a>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 pb-20 sm:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-8 max-w-7xl mx-auto sm:mb-20">
          <div className="flex flex-col justify-between h-full gap-6">
            <a href="#" className="flex items-center group">
              <img src="https://duracube.com.au/wp-content/uploads/2025/01/screenshot-2025-02-10-at-25953pm.png" alt="Duracube Footer Logo" className="h-[30px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-xs leading-relaxed text-slate-500">
                © 2024 Duracube Systems. Engineered for precision.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-3 text-xs font-medium uppercase tracking-wider text-slate-600">
            <a href="#" className="hover:text-blue-700 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-700 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-blue-700 transition-colors duration-200">Technical Specifications</a>
            <a href="#" className="hover:text-blue-700 transition-colors duration-200">Global Distribution</a>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className={`fixed bottom-0 w-full bg-white border-t border-slate-200 z-50 p-4 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] transition-transform duration-300 ease-in-out ${isStickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-black text-sm">Ready to start your project?</h4>
            <p className="text-xs text-slate-500 mt-1">Get precise specifications and quotes for your floorplan.</p>
          </div>
          <a href="https://duracube.com.au/send-us-your-plans/" className="w-full sm:w-auto bg-black text-white py-3 px-8 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors text-center whitespace-nowrap block">
            Send Us Your Plan
          </a>
        </div>
      </div>
    </div>
  );
}

