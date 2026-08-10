export type ProductCategory =
  | 'Partitioning Systems'
  | 'Locker Systems'
  | 'Bench Seating'
  | 'Privacy Panels'
  | 'Vanities'
  | 'DuraSafe Compact Laminate'
  | 'Hardware, Accessories & Locks';

export type Product = {
  slug: string;
  category: ProductCategory;
  name: string;
  code: string;
  h1: string;
  title: string;
  meta: string;
  intro: string;
  image: string;
  imageAlt: string;
  features: string[];
  benefits: string[];
  applications: string[];
  specification: string[];
};

const wp = 'https://duracube.com.au/wp-content/uploads';

const commonApplications = [
  'Schools and universities',
  'End-of-trip facilities',
  'Shopping centres',
  'Sport and gym change rooms',
  'Corporate office amenities',
  'Public and recreational amenities',
];

const partitionFeatures = [
  'DuraSafe 13mm compact laminate construction',
  'Waterproof, impact-resistant and vandal-resistant surface',
  'Black core edges require no edge strip',
  'Viva satin chrome or black hardware options',
  'Grey or black powder-coated aluminium extrusions',
];

const lockerFeatures = [
  'DuraSafe 13mm compact laminate doors and panels',
  'Water-resistant HMR or fully waterproof PVC carcass options',
  'Five electronic, mechanical and key lock options',
  'Multiple door layouts, vents, shelving and coat rails available',
  'Colours coordinate with partitions, seating and vanities',
];

const benchFeatures = [
  'Heavy-duty DuraSafe 13mm compact laminate construction',
  'Sturdy powder-coated steel frame where required',
  'Customisable lengths, optimised around 1200mm and 1800mm modules',
  'Waterproof, impact-resistant surface with no edge strip',
  'Colours coordinate with the complete DuraCube fitout',
];

const privacyFeatures = [
  'DuraSafe 13mm compact laminate panel',
  'Waterproof and impact-resistant surface',
  'Black core edges require no edge strip',
  'Grey or black powder-coated aluminium fixings',
  'Custom sizes and project-specific solutions available',
];

const vanityFeatures = [
  'DuraSafe 13mm compact laminate wet-area surface',
  'Made to measure and pre-cut for faster installation',
  'Silica-free, water-resistant and hygienic material',
  'Black core edges require no edge strip',
  'Colours coordinate with partitions and locker systems',
];

const specify = (product: string, mounting: string) => [
  `Product: DuraCube ${product}`,
  'Board selection: DuraSafe 13mm compact laminate',
  `Mounting: ${mounting}`,
  'Colour: Select from the DuraSafe stocked range',
];

const product = (p: Partial<Product> & Pick<Product, 'slug' | 'category' | 'name' | 'code' | 'intro' | 'image'>): Product => ({
  h1: p.name,
  title: `${p.name} | DuraCube`,
  meta: `Specify ${p.name} for durable Australian commercial wet-area projects. Explore features, materials, applications and downloads.`,
  imageAlt: `${p.name} commercial wet-area system`,
  features:
    p.category === 'Partitioning Systems' ? partitionFeatures :
    p.category === 'Locker Systems' ? lockerFeatures :
    p.category === 'Bench Seating' ? benchFeatures :
    p.category === 'Privacy Panels' ? privacyFeatures : vanityFeatures,
  benefits: [
    'Waterproof construction for demanding wet areas',
    'Impact-resistant, low-maintenance surfaces',
    'Pre-engineered modules reduce site trades and programme time',
    'Coordinated finishes across the complete DuraCube range',
  ],
  applications: commonApplications,
  specification: specify(p.name, 'Refer to project drawings and DuraCube details'),
  ...p,
});

export const products: Product[] = [
  product({
    slug: 'product/pedestal-mount-overhead-braced', category: 'Partitioning Systems', code: 'POB',
    name: 'Pedestal Mount – Overhead Braced (POB)',
    h1: 'Pedestal Mount – Overhead Braced Toilet Partitions',
    title: 'Overhead Braced Toilet Partitions | Pedestal Mount | DuraCube',
    meta: 'Heavy-duty pedestal mount, overhead braced toilet partitions in 13mm DuraSafe compact laminate. Built for high-traffic washrooms. Manufactured in Australia.',
    intro: 'The DuraCube Pedestal Mount – Overhead Braced system is a heavy-duty commercial toilet partition engineered for the busiest washrooms. Each cubicle is built from 13mm DuraSafe compact laminate and tied together with a continuous overhead bracing rail, so doors stay aligned and pilasters stay true through years of daily use in offices, shopping centres, pubs and clubs, public amenities, schools and sport and recreation facilities.',
    image: `${wp}/2017/01/pedestal-mount-overhead-braced-pob.jpg`,
    benefits: ['Heavy-duty by design: solid compact laminate resists moisture, impact and vandalism, with no veneer to chip, swell or peel.', 'Fast, low-trade installation: pedestal legs and pre-engineered fixings let a single trade install a full run quickly, cutting program time on site.', 'Specification you can hold: supplied as a complete, warranted system, so a cheaper look-alike substitute at tender stage is easy to identify and reject.', 'Low whole-of-life cost: sealed, seamless surfaces wipe clean and shrug off graffiti, keeping maintenance budgets down in high-use amenities.', 'Customisable configuration: a setback pedestal leg configuration is available to suit varied washroom layouts.'],
    specification: specify('Pedestal Mount – Overhead Braced System (POB)', 'Adjustable 200mm aluminium pedestal legs with square overhead headrail'),
  }),
  product({
    slug: 'product/pedestal-mount-ceiling-fixed-pcf', category: 'Partitioning Systems', code: 'PCF',
    name: 'Pedestal Mount – Ceiling Fixed (PCF)', h1: 'Pedestal Mount – Ceiling Fixed (PCF) Toilet Partitions',
    title: 'Ceiling Fixed Toilet Partitions | Pedestal Mount PCF | DuraCube',
    meta: 'Pedestal mount, ceiling fixed commercial toilet partitions in 13mm DuraSafe compact laminate. Maximum rigidity and privacy for high-use washrooms.',
    intro: 'The DuraCube Pedestal Mount – Ceiling Fixed (PCF) system fixes the partition run to both the floor pedestal and the ceiling for maximum rigidity and secure privacy. Manufactured from 13mm DuraSafe compact laminate, it is a robust commercial toilet cubicle solution for high-use washrooms where stability, sleek aesthetics and clean sightlines matter. Sturdy pedestal legs lift the panels clear of the floor, allowing quick cleaning with a mop or hose.',
    image: `${wp}/2017/01/pedestal-mount-ceiling-fixed-pcf-1-1024x1024.jpg`,
    benefits: ['Maximum stability: ceiling-fixed heads lock the run in place, ideal for tall panels and heavily trafficked amenities.', 'Durable and waterproof: compact laminate withstands moisture, knocks and daily cleaning without deteriorating.', 'Quick to assemble: pre-drilled components and clear fixing details reduce installation time and the number of trades required.', 'Spec-swap resistant: engineered as a complete DuraCube system with matching hardware, so substitutions compromise fit, finish and warranty.'],
    specification: specify('Pedestal Mount – Ceiling Fixed System (PCF)', '200mm pedestal legs with aluminium C-channel ceiling fixing'),
  }),
  product({
    slug: 'product/floor-mount-overhead-braced', category: 'Partitioning Systems', code: 'FOB',
    name: 'Floor Mount – Overhead Braced (FOB)', h1: 'Floor Mount – Overhead Braced (FOB) Toilet Partitions',
    title: 'Floor Mounted Overhead Braced Toilet Partitions | DuraCube',
    meta: 'The DuraCube 3000 Series floor mount, overhead braced toilet partition. Heavy-duty compact laminate cubicles for high-traffic commercial and public washrooms.',
    intro: 'The DuraCube Floor Mount – Overhead Braced (FOB) 3000 Series is a low-maintenance commercial toilet partition built specifically for high-use wet areas. Floor-mounted pilasters carry the load while a continuous overhead brace keeps the run rigid, delivering a hard-wearing cubicle system in 13mm DuraSafe compact laminate that stands up to constant traffic.',
    image: `${wp}/2017/01/floor-mount-overhead-braced-fob-330x260.jpg`,
    benefits: ['Built for wet areas: fully waterproof compact laminate suits showers, change rooms and hose-down environments.', 'Rigid and secure: overhead bracing distributes load and resists forced entry and vandalism.', 'Seamless, no-edge-strip finish: panels are finished without edge strips, leaving nothing to peel or trap grime in hose-cleaned areas.', 'Efficient to install: floor fixings and pre-engineered bracing streamline the build and reduce trade coordination.', 'Protects your specification: supplied complete and warranted, making a cheaper substitute obvious against the DuraCube standard.'],
    specification: specify('Floor Mount – Overhead Braced 3000 Series (FOB)', 'Floor-fixed pilasters with continuous overhead brace'),
  }),
  product({
    slug: 'product/floor-mount-ceiling-fixed', category: 'Partitioning Systems', code: 'FCF',
    name: 'Floor Mount – Ceiling Fixed (FCF)', h1: 'Floor Mount – Ceiling Fixed (FCF) Toilet Cubicles',
    title: 'Ceiling Fixed Toilet Cubicles | Floor Mount FCF | DuraCube',
    meta: 'Floor mount, ceiling fixed commercial toilet cubicles in 13mm DuraSafe compact laminate. Sleek, rigid, space-efficient partitions for modern washrooms.',
    intro: 'The DuraCube Floor Mount – Ceiling Fixed (FCF) system anchors each partition to the floor and ceiling for a sleek, rigid, space-saving commercial toilet cubicle. Manufactured from 13mm DuraSafe compact laminate, it delivers premium durability and a clean architectural finish for offices, retail and public amenities.',
    image: `${wp}/2017/01/floor-mount-ceiling-fixed-hero-image-500x500.png`,
    benefits: ['Sleek and space-saving: floor-to-ceiling fixing gives a clean, contemporary line while maximising usable floor area.', 'Heavy-duty construction: solid compact laminate resists water, impact and graffiti in demanding settings, with a seamless, no-edge-strip finish suited to hose-cleaned areas.', 'Simple, fast install: clear fixing details and pre-machined components cut installation time and trades on site.', 'Warranted system: specified as a complete DuraCube solution to guard against inferior substitutions at handover.'],
    specification: specify('Floor Mount – Ceiling Fixed System (FCF)', 'Floor-fixed nibs with aluminium C-channel ceiling fixing'),
  }),
  product({
    slug: 'product/floor-mount-free-standing-3ffs', category: 'Partitioning Systems', code: 'FFS',
    name: 'Floor Mount – Free Standing (FFS)', h1: 'Floor Mount – Free Standing (FFS) Toilet Partitions',
    title: 'Free Standing Toilet Partitions | Floor Mount FFS | DuraCube',
    meta: 'Free-standing, floor-mounted commercial toilet partitions in 13mm DuraSafe compact laminate. Flexible, durable cubicles for commercial and public restrooms.',
    intro: 'The DuraCube Floor Mount – Free Standing (FFS) system is a flexible, floor-mounted commercial toilet partition that needs no overhead bracing or ceiling fixing. Built from 13mm DuraSafe compact laminate, it suits refurbishments and new builds alike where fast installation and design freedom are priorities.',
    image: `${wp}/2017/01/floor-mount-free-standing-ffs-330x260.jpg`,
    benefits: ['Installation flexibility: free-standing pilasters install without ceiling works, ideal for retrofits and varied ceiling heights.', 'Durable and hygienic: waterproof, scratch-resistant surfaces with a no-edge-strip finish resist moisture and wipe clean for easy maintenance.', 'Fewer trades on site: self-supporting design and pre-engineered fixings speed up the program.', 'Consistent DuraCube quality: supplied as a complete warranted system so the specified standard is protected.'],
    specification: specify('Floor Mount – Free Standing System (FFS)', 'Self-supporting floor-fixed pilasters'),
  }),
  product({
    slug: 'product/privacy-core-partition', category: 'Partitioning Systems', code: 'FHPC',
    name: 'Full Height – Privacy Core (FHPC)', h1: 'Full Height – Privacy Core (FHPC) Toilet Partitions',
    title: 'Full Height Toilet Partitions | Privacy Core FHPC | DuraCube',
    meta: 'Full height commercial toilet partitions with the Privacy Core (FHPC) system. Durable 13mm DuraSafe compact laminate cubicles that minimise sightline gaps.',
    intro: 'The DuraCube Full Height – Privacy Core (FHPC) system is an affordable route to full-height privacy in commercial washrooms. Floor-mounted and ceiling-fixed panels in 13mm DuraSafe compact laminate minimise the gaps found in conventional cubicles, improving visual and acoustic privacy while remaining tough enough for high-traffic use. Slotted panels above the doors provide natural ventilation, and the system complies with Department of Education standards in most Australian states.',
    image: `${wp}/2017/01/untitled-design-50-500x500.png`,
    benefits: ['Enhanced privacy: full-height panels reduce sightline gaps above and below doors for greater user comfort.', 'Robust and low maintenance: compact laminate resists moisture, impact and daily wear without special upkeep.', 'Cost-effective full height: delivers a premium privacy outcome without the cost of traditional built-in construction.', 'Specification integrity: engineered and warranted as a complete DuraCube system to resist cheaper substitutions.'],
    specification: specify('Full Height – Privacy Core System (FHPC)', 'Floor and ceiling fixed with ventilated panels above doors'),
  }),
  product({
    slug: 'product/full-height-privacy-ultra-fhpu', category: 'Partitioning Systems', code: 'FHPU',
    name: 'Full Height – Privacy Ultra (FHPU)', h1: 'Full Height – Privacy Ultra (FHPU): Anti-Vandal Toilet Partitions',
    title: 'Anti-Vandal Toilet Partitions | Full Height Privacy Ultra | DuraCube',
    meta: 'Full Height Privacy Ultra: anti-vandal, heavy-duty toilet partitions in seamless DuraSafe compact laminate. Waterproof, impact-resistant washroom amenities.',
    intro: 'The DuraCube Full Height – Privacy Ultra (FHPU) is a heavy-duty, anti-vandal toilet partition system. Seamless full-height panels in 13mm DuraSafe compact laminate are waterproof, impact-resistant and vandal-resistant, making FHPU the benchmark for anti-vandal washroom amenities in public toilets, transport hubs, schools and other high-abuse environments. The system meets all relevant building codes and standards.',
    image: `${wp}/2017/01/full-height-privacy-ultra-fhpu-1-330x260.jpg`,
    benefits: ['Anti-vandal and heavy-duty: impact-resistant, graffiti-resistant compact laminate with a no-edge-strip design leaves nothing to pry, tamper with or destroy.', 'Full-height privacy: floor-to-ceiling panels minimise gaps above and below doors for advanced visual and acoustic privacy.', 'Built for the harshest amenities: waterproof construction withstands hose-down cleaning, showers and constant public use.', 'Fewer trades, faster install: a complete pre-engineered system installs quickly and reduces program time and cost.', 'Protects the specification: supplied as a warranted, all-in system so builders and specifiers can reject inferior substitutes that fail on durability and compliance.'],
    specification: specify('Full Height – Privacy Ultra System (FHPU)', 'Seamless floor-to-ceiling anti-vandal assembly'),
  }),
  product({
    slug: 'product/full-height-privacy-max', category: 'Partitioning Systems', code: 'FHPM',
    name: 'Full Height – Privacy Max (FHPM)', h1: 'Full Height – Privacy Max (FHPM) Toilet Cubicles',
    title: 'Full Height Privacy Toilet Cubicles | Privacy Max FHPM | DuraCube',
    meta: 'Full height Privacy Max (FHPM) commercial toilet cubicles in 13mm DuraSafe compact laminate. Maximum privacy and a modern finish for commercial washrooms.',
    intro: 'The DuraCube Full Height – Privacy Max (FHPM) system delivers maximum privacy with a refined, modern finish for commercial environments. Full-height panels in 13mm DuraSafe compact laminate close the gaps of conventional cubicles while providing the strength and low maintenance expected of a DuraCube partition. It is a cost-effective alternative to building stud walls or individual rooms, and an ideal fit for gender-neutral and unisex bathrooms.',
    image: `${wp}/2017/01/partition-full-height-privacy-max02-1-scaled-330x260.jpg`,
    benefits: ['Maximum privacy: full-height doors and panels virtually eliminate sightline gaps and shield users from mobile phone cameras for premium user comfort.', 'Durable and stylish: compact laminate combines a contemporary look with waterproof, impact-resistant performance.', 'Acoustic and compliant: an acoustic rubber seal around doors and openings reduces toilet noise, and the system meets NCC 2022 Part F standards for unisex facilities.', 'Efficient installation: pre-engineered components reduce trades and speed up the build program.', 'Warranted DuraCube system: specified to protect against cheaper, lower-performing substitutions.'],
    specification: specify('Full Height – Privacy Max System (FHPM)', 'Floor-to-ceiling with acoustic door seals'),
  }),
  product({
    slug: 'product/full-height-self-contained', category: 'Partitioning Systems', code: 'FHSC',
    name: 'Full Height Self-Contained (FHSC)', h1: 'Full Height Self-Contained (FHSC) Toilet Cubicles',
    title: 'Self-Contained Toilet Cubicles | Full Height FHSC | DuraCube',
    meta: 'Full Height Self-Contained (FHSC) toilet cubicles with integrated basins. Durable compact laminate, all-in-one design for schools and commercial washrooms.',
    intro: 'The DuraCube Full Height Self-Contained (FHSC) system integrates a wash basin, soap dispenser, mirror, hand dryer and secure storage within each private cubicle, removing the design gaps of communal washing areas such as lack of privacy and behavioural hot spots. Built from 13mm DuraSafe compact laminate, this all-in-one cubicle meets the growing demand for trauma-informed and gender-inclusive design in Australian schools and universities.',
    image: `${wp}/2026/02/fhsc-1-1-500x500.png`,
    benefits: ['Fully self-contained: internal basin, dispenser, mirror, dryer and lockable storage keep every function inside one private space.', 'Safer, inclusive washrooms: eliminates communal wash areas to support trauma-informed and gender-inclusive design.', 'Heavy-duty and hygienic: waterproof compact laminate withstands constant use and simplifies cleaning.', 'Streamlined delivery: a complete factory-engineered system reduces trades and protects the specified standard on site.'],
    specification: specify('Full Height Self-Contained System (FHSC)', 'Floor-to-ceiling, complete with integrated basin and accessories'),
  }),
  product({
    slug: 'product/fhsc-c', category: 'Partitioning Systems', code: 'FHSC-C',
    name: 'Full Height Self-Contained Cleaners Closet (FHSC-C)',
    title: 'Self-Contained Cleaners Closet | FHSC-C | DuraCube',
    meta: 'The FHSC-C integrates a lockable cleaners closet into the FHSC toilet cubicle run. Durable compact laminate storage for chemicals and equipment.',
    intro: 'The DuraCube Full Height Self-Contained Cleaners Closet (FHSC-C) is the operational anchor of the FHSC partitioning system. It integrates a dedicated, lockable cleaners closet directly into the cubicle run, giving facilities secure storage for chemicals and equipment exactly where they are needed while maintaining the streamlined, all-in-one aesthetic of the environment.',
    image: `${wp}/2026/05/duracubefeb252026_shonproductions-143-500x500.jpg`,
    benefits: ['Dedicated maintenance hub: securely locked storage for cleaning chemicals and equipment built into the partition run.', 'Matches the FHSC system: shares the internal-basin cubicle design for a consistent, secure finish.', 'Durable and hygienic: waterproof compact laminate withstands heavy use and frequent cleaning, with a seamless, no-edge-strip design that resists tampering.', 'Complete warranted solution: specified as part of the DuraCube system to protect performance and warranty.'],
    specification: specify('Full Height Self-Contained Cleaners Closet (FHSC-C)', 'Integrated lockable closet within the FHSC cubicle run'),
  }),

  ...[
    ['product/plinth-mounted-lpm', 'LPM', 'Lockers – Plinth Mounted (LPM): School & Commercial Lockers', `${wp}/2023/09/duracube_lockers-plinth-mount-1024x1024.jpg`, 'The DuraCube Locker – Plinth Mounted (LPM) is built with waterproof 13mm DuraSafe compact laminate doors for a practical, low-maintenance and impact-resistant finish. Plinth mounting needs no structural wall for support and adds valuable storage capacity, making LPM an ideal school locker and commercial locker solution for end-of-trip, education and sport change rooms.', ['Free-standing design: no structural wall required, so lockers can be positioned where storage is needed.', 'Heavy-duty and waterproof: compact laminate resists moisture, impact and daily wear in busy change rooms.', 'Coordinated finish: door colours match the DuraCube partition scheme for a unified fitout.', 'Fast to install: pre-engineered plinth modules reduce trades and speed up the program.'], 'Plinth Mounted Lockers | School & Commercial | LPM | DuraCube', 'DuraCube Plinth Mounted (LPM) lockers in waterproof 13mm compact laminate. Free-standing school and commercial lockers that need no structural wall.'],
    ['product/wall-mounted-lwm', 'LWM', 'Lockers – Wall Mounted (LWM): Commercial Change-Room Lockers', `${wp}/2023/09/duracube_lockers-wall-mount-1024x1024.jpg`, 'The DuraCube Locker – Wall Mounted (LWM) suspends storage off the floor for a modern, space-saving commercial locker that keeps floors clear for easy cleaning. Built with waterproof 13mm DuraSafe compact laminate doors, LWM suits gym, corporate and bathroom change rooms where hygiene and a clean line matter.', ['Floor-clearing design: wall mounting simplifies cleaning and gives a contemporary, space-efficient look.', 'Durable and hygienic: waterproof compact laminate withstands moisture and constant handling.', 'Coordinated aesthetic: door colours align with the DuraCube partition and vanity scheme.', 'Efficient installation: pre-engineered fixings reduce trades and installation time.'], 'Wall Mounted Lockers | Commercial & Change Room | LWM | DuraCube', 'DuraCube Wall Mounted (LWM) lockers in waterproof 13mm compact laminate. Space-saving commercial and change-room lockers that keep floors clear for cleaning.'],
    ['product/bench-mounted-lbm', 'LBM', 'Lockers – Bench Mounted (LBM): Integrated Seating & Storage', `${wp}/2023/09/duracube_lockers-bench-mount-1024x1024.jpg`, 'The DuraCube Locker – Bench Mounted (LBM) combines lockers with integrated bench seating in one space-efficient unit. Built from waterproof 13mm DuraSafe compact laminate, LBM is a durable, all-in-one storage and seating solution for gym, school and end-of-trip change rooms.', ['Integrated seating and storage: combines lockers and a bench in a single footprint to save space.', 'Heavy-duty construction: impact-resistant compact laminate handles constant change-room use.', 'Coordinated finish: door and bench colours match the wider DuraCube fitout.', 'Low-trade install: factory-built modules reduce site trades and program time.'], 'Bench Mounted Lockers | Gym & School | LBM | DuraCube', 'DuraCube Bench Mounted (LBM) lockers integrate seating and storage in waterproof 13mm compact laminate. Durable gym, school and end-of-trip change-room lockers.'],
    ['product/lockers-plinth-mounted-end-of-trip-lpm-eot', 'LPM-EOT', 'Lockers – Plinth Mounted End-of-Trip (LPM-EOT)', `${wp}/2025/01/lpm-eot-1-1024x1024.png`, 'The DuraCube Locker – Plinth Mounted End-of-Trip (LPM-EOT) delivers robust, stylish storage purpose-built for end-of-trip facilities. Free-standing plinth mounting needs no structural wall, and waterproof 13mm DuraSafe compact laminate keeps the lockers looking sharp in commercial gym and bathroom change rooms.', ['Purpose-built for end of trip: configured for cyclists and commuters in premium commercial facilities.', 'Free-standing and flexible: plinth mounting positions storage anywhere without structural walls.', 'Durable and waterproof: compact laminate resists moisture and heavy daily use.', 'Coordinated, low-trade fitout: matching finishes and pre-engineered modules speed installation.'], 'End-of-Trip Lockers | Plinth Mounted LPM-EOT | DuraCube', 'DuraCube LPM-EOT plinth mounted end-of-trip lockers in waterproof 13mm compact laminate. Robust, stylish storage for commercial gym and bathroom change rooms.'],
    ['product/lockers-shoe-box-mounted-lsbm', 'LSBM', 'Lockers – Shoe Box Mounted (LSBM)', `${wp}/2025/01/lockers-shoe-box-mount02-1024x576.jpg`, 'The DuraCube Locker – Shoe Box Mounted (LSBM) provides compact, secure footwear storage that adds capacity to any change-room locker system without needing a structural wall. Built with waterproof 13mm DuraSafe compact laminate, LSBM is a space-efficient addition for gym, school and commercial change rooms.', ['Space-efficient storage: compact shoe box compartments maximise locker capacity in tight footprints.', 'Heavy-duty and waterproof: compact laminate resists moisture, odour retention and impact.', 'Coordinated finish: matches the wider DuraCube locker and partition scheme.', 'Quick to install: pre-engineered modules keep trades and program time down.'], 'Shoe Box Lockers | Change Room & Gym | LSBM | DuraCube', 'DuraCube LSBM shoe box lockers in waterproof 13mm compact laminate. Compact, space-efficient footwear storage for gym, school and commercial change rooms.'],
    ['product/lockers-shoe-box-seating-mounted-lsbsm', 'LSBSM', 'Lockers – Shoe Box Seating Mounted (LSBSM)', `${wp}/2025/01/lockers-shoe-box-seating-mount02-1024x576.jpg`, 'The DuraCube Locker – Shoe Box Seating Mounted (LSBSM) integrates shoe box storage with built-in seating for a space-saving change-room unit. Waterproof 13mm DuraSafe compact laminate makes it a durable, stylish solution for gym, school and end-of-trip change rooms.', ['Storage plus seating: shoe box lockers and a bench combine to save floor space.', 'Durable and waterproof: compact laminate withstands moisture and constant use.', 'Coordinated aesthetic: finishes align with the DuraCube partition and locker range.', 'Low-trade installation: factory-built modules reduce trades and speed the build.'], 'Shoe Box Seating Lockers | LSBSM | DuraCube', 'DuraCube LSBSM shoe box seating lockers integrate storage and seating in waterproof 13mm compact laminate. Durable, stylish solution for change rooms and end of trip.'],
    ['product/lockers-wall-mounted-end-of-trip-lwm-eot', 'LWM-EOT', 'Lockers – Wall Mounted End-of-Trip (LWM-EOT)', `${wp}/2025/01/lockers-end-of-trip-wall-mount02-1024x576.jpg`, 'The DuraCube Locker – Wall Mounted End-of-Trip (LWM-EOT) lifts storage off the floor for a stylish, space-efficient end-of-trip locker. Waterproof 13mm DuraSafe compact laminate and floor-clearing wall mounting make it ideal for modern corporate and gym change rooms.', ['Floor-clearing wall mount: keeps floors clear for fast, hygienic cleaning.', 'Purpose-built for end of trip: sized and configured for commuter and cyclist facilities.', 'Durable and waterproof: compact laminate resists moisture and heavy use.', 'Coordinated, quick install: matching finishes and pre-engineered fixings reduce trades.'], 'End-of-Trip Lockers | Wall Mounted LWM-EOT | DuraCube', 'DuraCube LWM-EOT wall mounted end-of-trip lockers in waterproof 13mm compact laminate. Space-efficient storage that keeps floors clear in corporate and gym change rooms.'],
    ['product/bench-seat-mount-player', 'LBSM-P', 'Lockers – Bench Seat Mount Player (LBSM-P)', `${wp}/2026/02/duracubewestonbearsmarch2026_shonproductions-23-1-500x500.jpg`, 'The DuraCube Locker – Bench Seat Mount Player (LBSM-P) is a team locker-room unit that pairs personal storage with integrated bench seating. Built from waterproof 13mm DuraSafe compact laminate, LBSM-P suits sport change rooms and end-of-trip facilities, with coordinated ironing, airing, towel and storage options.', ['Built for players and teams: integrated seating and storage for sport and recreation change rooms.', 'Heavy-duty and waterproof: compact laminate handles wet, high-traffic team environments.', 'Coordinated facility fitout: finishes match the DuraCube partition and locker range.', 'Efficient installation: pre-engineered modules reduce trades and site time.', 'Fully customisable: available in custom widths, team colours and integrated team logos.'], 'Player Lockers | Bench Seat Mount LBSM-P | DuraCube', 'DuraCube LBSM-P player lockers combine bench seating and storage in waterproof 13mm compact laminate. Durable team locker-room storage for sport change rooms.'],
    ['product/shoe-box-seat-mount-player', 'LSBSM-P', 'Lockers – Shoe Box Seat Mount Player (LSBSM-P)', `${wp}/2026/03/locker-shoe-box-seat-mount-player-render-1024x643.png`, 'The DuraCube Locker – Shoe Box Seat Mount Player (LSBSM-P) combines shoe box storage with integrated bench seating for team change rooms. Waterproof 13mm DuraSafe compact laminate delivers a practical, low-maintenance and impact-resistant surface, ideal for sport change rooms and end-of-trip facilities.', ['Player-focused storage: shoe box compartments and seating tailored to sport and recreation.', 'Durable and waterproof: compact laminate withstands moisture and heavy team use.', 'Coordinated finish: matches the wider DuraCube locker and partition scheme.', 'Low-trade install: factory-built modules speed installation.', 'Fully customisable: available in custom widths, team colours and integrated team logos.'], 'Player Lockers | Shoe Box Seat Mount LSBSM-P | DuraCube', 'DuraCube LSBSM-P player lockers combine shoe box storage and bench seating in waterproof 13mm compact laminate. Durable team storage for sport change rooms.'],
    ['product/lockers-bench-seat-mount-cricket', 'LBSM-C', 'Lockers – Bench Seat Mount Cricket (LBSM-C)', `${wp}/2026/03/untitled-design-3-1024x576.png`, 'The DuraCube Locker – Bench Seat Mount Cricket (LBSM-C) is a sport change-room unit configured for cricket clubs and pavilions, pairing storage with integrated bench seating. Built from waterproof 13mm DuraSafe compact laminate, it is a durable, coordinated solution for team locker rooms and end-of-trip facilities, configured in line with Cricket Australia’s Community Cricket Facility Guidelines.', ['Configured for cricket teams: storage and seating suited to pavilions and club change rooms.', 'Heavy-duty and waterproof: compact laminate stands up to wet, high-traffic use.', 'Coordinated fitout: finishes align with the DuraCube partition and locker range.', 'Fast installation: pre-engineered modules reduce trades and program time.', 'Fully customisable: available in custom widths to fit any site layout, with options to add custom team colours and integrated team logos.', 'Aligned to Cricket Australia guidelines: designed in line with Cricket Australia’s Community Cricket Facility Guidelines for community club change rooms.'], 'Cricket Lockers | Bench Seat Mount LBSM-C | DuraCube', 'DuraCube LBSM-C cricket lockers combine bench seating and storage in waterproof 13mm compact laminate. Durable team locker-room storage for sport change rooms.'],
    ['product/lockers-accessible-ironing-station-ais', 'AIS', 'Lockers – Accessible Ironing Station (AIS)', `${wp}/2026/06/mechanically-adjustible-height-1.png`, 'The DuraCube Locker – Accessible Ironing Station (AIS) provides a coordinated, accessible ironing facility for end-of-trip and change-room environments, with a mechanically height-adjustable ironing board controlled by up and down buttons. Built from waterproof 13mm DuraSafe compact laminate, it integrates neatly with the wider DuraCube locker system to support well-appointed commuter and staff facilities.', ['Accessible service facility: height-adjustable ironing board designed for inclusive end-of-trip fitouts.', 'Durable and waterproof: compact laminate resists moisture and heavy daily use.', 'Coordinated with lockers: matches the DuraCube locker and partition finishes.', 'Low-trade installation: pre-engineered build reduces site trades and time.'], 'Accessible Ironing Station | End of Trip AIS | DuraCube', 'DuraCube Accessible Ironing Station (AIS) in waterproof 13mm compact laminate. Height-adjustable, accessible ironing facilities for end-of-trip and change-room fitouts.'],
  ].map(([slug, code, h1, image, intro, benefits, title, meta]) => product({
    slug: slug as string, category: 'Locker Systems', code: code as string,
    name: (h1 as string).replace(/:.*$/, ''), h1: h1 as string, image: image as string,
    intro: intro as string, benefits: benefits as string[],
    title: title as string,
    meta: meta as string,
    specification: specify(h1 as string, (code as string).includes('Wall') ? 'Wall mounted' : 'Factory-engineered modular installation'),
  })),

  product({
    slug: 'end-of-trip', category: 'Locker Systems', code: 'EOT',
    name: 'End of Trip & Change Room Facilities',
    h1: 'End of Trip & Change Room Facilities',
    title: 'End of Trip & Change Room Facilities | Lockers & Benches | DuraCube',
    meta: 'Design durable, compliant end-of-trip and change room facilities with DuraCube. Custom lockers, partitions, benches and vanities for workplaces, gyms and sport clubs.',
    image: `${wp}/2025/07/2-1-1024x1024.png`,
    intro: 'Create functional, compliant and inspiring end-of-trip facilities with DuraCube. From custom locker configurations and secure smart-locking systems to integrated seating and premium vanities, DuraCube designs end-of-trip facilities built to last. From corporate end-of-trip suites to sport and recreation change rooms, DuraCube delivers change room facilities built to last, combining secure lockers, integrated seating and durable partitions in a single coordinated fitout.',
    features: ['Custom lockers and secure smart-locking options', 'Integrated bench seating and shoe box storage', 'Full-height toilet and shower partitions', 'Coordinated vanities, towel drops and service units', 'Waterproof 13mm DuraSafe compact laminate finishes'],
    benefits: ['Built for wet, high-traffic change rooms: waterproof compact laminate resists moisture, impact and vandalism in the toughest sport and aquatic environments.', 'Complete, coordinated fitout: lockers, bench seating, shoe box storage, vanities and partitions from one Australian manufacturer.', 'Fast, low-trade installation: pre-engineered modules cut trades and program time so facilities open sooner.', 'Specification you can hold: a warranted DuraCube system that resists cheaper substitutions at tender and handover.'],
    applications: ['Corporate end-of-trip suites', 'Sport and recreation change rooms', 'Aquatic and swim centres', 'Community sports pavilions', 'Stadiums and team facilities', 'School sport change rooms'],
    specification: specify('End of Trip & Change Room Facilities', 'Coordinated project-specific layout of lockers, seating, vanities and partitions'),
  }),

  ...[
    ['product/island-bsi', 'BSI', 'Bench Seating – Island (BSI)', `${wp}/2023/09/duracube_bench-seating-island-1024x1024.jpg`, 'A low-maintenance island bench in DuraSafe 13mm compact laminate, designed to complement partitioning, lockers and vanities in commercial change rooms.'],
    ['product/bench-seating-shoe-box-island-sbi', 'SBI', 'Bench Seating – Shoe Box Island (SBI)', `${wp}/2025/01/bench-seating-shoe-box-island02-1024x576.jpg`, 'A low-maintenance alternative to timber or aluminium seating, with dedicated shoe storage that maximises useful space in change rooms.'],
    ['product/bench-seating-shoe-box-wall-with-coat-rail-sbw-c', 'SBW-C', 'Bench Seating – Shoe Box Wall With Coat Rail (SBW-C)', `${wp}/2025/01/bench-seating-shoe-box-wall-with-coat-rail-02-1024x576.jpg`, 'Wall-side bench seating with shoe storage and an integrated coat rail, constructed in waterproof DuraSafe compact laminate.'],
    ['product/bench-seating-shoe-box-wall-with-shelving-sbw-s', 'SBW-S', 'Bench Seating – Shoe Box Wall With Shelving (SBW-S)', `${wp}/2025/01/bench-seating-shoe-box-wall-with-shelving02-1024x576.jpg`, 'Wall-side bench seating with dedicated shoe compartments, hooks and matching compact laminate shelving.'],
    ['product/wall-with-shelving-bsw-s', 'BSW-S', 'Bench Seating – Wall with Shelving (BSW-S)', `${wp}/2023/09/duracube_bench-seating-wall-with-shelving-1024x1024.jpg`, 'Waterproof wall-mounted bench seating with overhead shelving for additional storage in commercial wet areas.'],
    ['product/wall-with-coat-rail-bsw-c', 'BSW-C', 'Bench Seating – Wall with Coat Rail (BSW-C)', `${wp}/2023/09/duracube_bench-seating-wall-with-coat-rail-1024x1024.jpg`, 'Waterproof wall-mounted bench seating with an integrated coat rail, designed to complement island seating, partitions and vanities.'],
  ].map(([slug, code, name, image, intro]) => product({slug, code, name, image, intro, category: 'Bench Seating', specification: specify(name, 'Refer to selected island or wall-mounted configuration')})),

  ...[
    ['product/wall-mount-pwm', 'PWM', 'Privacy Panel – Wall Mount (PWM)', `${wp}/2023/09/duracube_privacy-panel-wall-mount-1024x1024.jpg`, 'A visually unobtrusive wall-mounted privacy panel for low-traffic wet areas. The floor remains clear for easy cleaning, with blocking or a masonry wall required for secure mounting.'],
    ['product/pedestal-mount-ppm', 'PPM', 'Privacy Panel – Pedestal Mount (PPM)', `${wp}/2023/09/duracube_privacy-panel-pedestal-mount-1024x1024.jpg`, 'A low-maintenance privacy panel for high-use wet areas. Pedestal legs add structural strength while keeping the floor accessible for mopping and hose cleaning.'],
    ['product/childcare-pcc', 'PCC', 'Privacy Panel – Childcare (PCC)', `${wp}/2023/09/duracube_privacy-panel-childcare-1024x1024.jpg`, 'A purpose-designed childcare privacy panel that complies with NCC F2.5(c), with durable pedestal mounting and easy-clean compact laminate.'],
    ['product/full-height-pfh', 'PFH', 'Privacy Panel – Full Height (PFH)', `${wp}/2023/09/privacy-panel-full-height-pfh-1024x1024.jpg`, 'A floor-to-ceiling privacy screen in waterproof compact laminate, offering a space-efficient alternative to stud or masonry walls.'],
    ['product/post-fixed-ppf', 'PPF', 'Privacy Panel – Post Fixed (PPF)', `${wp}/2023/09/duracube_privacy-panel-post-fixed-1024x1024.jpg`, 'A cost-effective open-plan bathroom and change-room screen, supported by a floor-to-ceiling post for maximum structural durability.'],
  ].map(([slug, code, name, image, intro]) => product({slug, code, name, image, intro, category: 'Privacy Panels', specification: specify(name, 'Refer to selected wall, pedestal, post or full-height fixing')})),

  ...[
    ['product/inset-vb520', 'VB520', 'Vanity Bench – Inset (VB520)', `${wp}/2023/09/duracube_vanity-bench-inset-1024x1024.jpg`, 'A made-to-measure 520mm-deep vanity bench for inset or above-counter basins. Pre-cut DuraSafe compact laminate provides a silica-free, hygienic wet-area surface and faster on-site installation.'],
    ['product/semi-recessed-vb350', 'VB350', 'Vanity Bench – Semi-Recessed (VB350)', `${wp}/2023/09/duracube_vanity-bench-semi-recessed-1024x1024.jpg`, 'A made-to-measure 350mm-deep vanity bench for semi-recessed basins, pre-cut in silica-free, water-resistant DuraSafe compact laminate.'],
    ['product/vanity-cabinet-inset-vcwm520', 'VCWM520', 'Vanity Cabinet – Inset (VCWM520)', `${wp}/2025/08/1-1024x576.png`, 'A made-to-measure vanity cabinet for inset basins, pre-cut and prefabricated for quick installation in demanding commercial wet areas.'],
    ['product/vanity-cabinet-semi-recessed-vcwm350', 'VCWM350', 'Vanity Cabinet – Semi-Recessed (VCWM350)', `${wp}/2025/08/2-1024x576.png`, 'A compact 350mm-deep vanity cabinet for semi-recessed basins, manufactured from waterproof compact laminate and coordinated with the complete DuraCube scheme.'],
  ].map(([slug, code, name, image, intro]) => product({slug, code, name, image, intro, category: 'Vanities', specification: specify(name, 'DuraCube custom wall brackets or cabinet mounting system')})),

  product({
    slug: 'product/durasafe-stocked-colours', category: 'DuraSafe Compact Laminate', code: 'DS',
    name: 'DuraSafe Stocked Colours', image: `${wp}/2023/09/duracube_vanity-bench-inset-1024x1024.jpg`,
    intro: 'DuraSafe is DuraCube’s stocked compact laminate range for commercial wet areas. The 13mm panels are waterproof, impact-resistant, silica-free and available in coordinated solid, timber and patterned finishes.',
    features: ['13mm solid compact laminate', 'Waterproof, impact-resistant and easy to clean', 'Silica-free commercial wet-area surface', 'Stocked Australian colour range', 'Black core edges require no edge strip'],
    specification: specify('DuraSafe Stocked Colours', 'Cut to size or supplied as part of a complete DuraCube system'),
  }),
  product({
    slug: 'first-nations-range', category: 'DuraSafe Compact Laminate', code: 'FN',
    name: 'DuraSafe First Nations Range', image: `${wp}/2025/07/1-1-700x500.png`,
    intro: 'Developed in collaboration with Blaklash, the DuraCube First Nations Range invites the architecture and design community to engage with the enduring narrative of the Australian landscape through material specification and purpose-driven design.',
    features: ['Developed in collaboration with Blaklash', 'Purpose-driven Australian design collection', 'Suitable for coordinated DuraCube wet-area systems', 'Project support and lookbook available', 'Specified through the DuraCube design team'],
    specification: specify('DuraSafe First Nations Range', 'Contact DuraCube for artwork, colour and project-specific specification'),
  }),
  product({
    slug: 'products/hardware-accessories-locks', category: 'Hardware, Accessories & Locks', code: 'HW',
    name: 'Hardware, Accessories & Locks', image: `${wp}/2017/01/pedestal-mount-overhead-braced-pob.jpg`,
    intro: 'Complete DuraCube systems with coordinated commercial-grade hardware, accessories and locker locks. Select from satin chrome and black partition hardware, multiple electronic and mechanical locker locks, rails, hooks and wet-area accessories.',
    features: ['Viva satin chrome and black partition hardware', 'Electronic touch-pad and button locks', 'Mechanical combination, padlock hasp and key-lock options', 'Concealed stainless steel fixings', 'Coordinated rails, hooks, hinges and accessories'],
    specification: specify('Hardware, Accessories & Locks', 'Select the system-compatible hardware schedule with DuraCube'),
  }),
];

export const categories: ProductCategory[] = [
  'Partitioning Systems',
  'Locker Systems',
  'Bench Seating',
  'Privacy Panels',
  'Vanities',
  'DuraSafe Compact Laminate',
  'Hardware, Accessories & Locks',
];

export const categoryUrls: Record<ProductCategory, string> = {
  'Partitioning Systems': 'https://duracube.com.au/products/partitioning-systems/',
  'Locker Systems': 'https://duracube.com.au/products/locker-systems/',
  'Bench Seating': 'https://duracube.com.au/products/bench-seating/',
  'Privacy Panels': 'https://duracube.com.au/products/privacy-panels/',
  'Vanities': 'https://duracube.com.au/products/vanities/',
  'DuraSafe Compact Laminate': 'https://duracube.com.au/product/compact-laminate-cut-to-size-service/',
  'Hardware, Accessories & Locks': 'https://duracube.com.au/accessories-hardware/',
};

export const projects = [
  { name: 'Weston Bears Park', sector: 'Sport & Recreation', image: `${wp}/2026/03/duracubewestonbearsmarch2026_shonproductions-76-scaled-700x500.jpg` },
  { name: 'St Marys Baseball Club, Monfarville Reserve', sector: 'Sport & Recreation', image: `${wp}/2026/02/5-700x500.png` },
  { name: 'Anytime Fitness – Ropes Crossing', sector: 'Health & Fitness', image: `${wp}/2026/01/duracubedec182025_shonproductions-129-scaled-700x500.jpg` },
  { name: 'Modbury Sports and Community Club', sector: 'Community', image: `${wp}/2026/01/modbury-cc-18-700x500.jpg` },
  { name: 'Palmview Schools', sector: 'Education', image: `${wp}/2025/09/palmviewschool_044-700x500.jpg` },
  { name: 'Tanks Arts Centre', sector: 'Community', image: `${wp}/2025/09/46-collins-ave-edge-hill-4-700x500.jpg` },
];

export const routeFor = (p: Product) => `#/${p.slug}`;

export const productFromHash = (hash: string) => {
  const clean = hash.replace(/^#\/?/, '').replace(/\/$/, '');
  return products.find((p) => p.slug === clean) ?? products[0];
};
