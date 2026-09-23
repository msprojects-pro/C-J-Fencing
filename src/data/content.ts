export interface ServiceCategory {
  id: string;
  categoryNumber: string;
  title: string;
  description: string;
  services: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  alt: string;
  span?: string; // For asymmetric grid layout
}

export const COMPANY_INFO = {
  name: "C&J Fencing Gardening",
  tagline: "Garden transformation",
  phone: "07493773370",
  phoneFormatted: "07493 773 370",
  phoneHref: "tel:07493773370",
  whatsappHref: "https://wa.me/447493773370",
  email: "CJfencingGardening@outlook.com",
  emailHref: "mailto:CJfencingGardening@outlook.com",
  facebookName: "C&JfencingGardening",
  facebookHref: "https://www.facebook.com/search/top?q=C%26JfencingGardening",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "fencing-installation",
    categoryNumber: "01",
    title: "FENCING & INSTALLATION",
    description:
      "Durable boundary fencing, secure shed bases, and custom timber sleeper installations built for long-term stability.",
    services: [
      "Fencing",
      "Shed Base Installation",
      "Sleeper / Planter Installation",
    ],
  },
  {
    id: "garden-landscaping",
    categoryNumber: "02",
    title: "GARDEN & LANDSCAPING",
    description:
      "Complete lawn renewals, precision turf laying, low-maintenance astro turf, stone slabbing, and total garden clearances.",
    services: [
      "Grass Cutting",
      "Turf & Astro Laying",
      "Slabbing",
      "Garden Clearances",
    ],
  },
  {
    id: "maintenance-cleaning",
    categoryNumber: "03",
    title: "MAINTENANCE & CLEANING",
    description:
      "Regular and one-off outdoor maintenance, high-power pressure washing, tree and hedge care, and licensed waste removal.",
    services: [
      "Hedge Cutting & Removal",
      "Tree & Stump Removal",
      "Pressure Washing",
      "Decking & Patio Cleaning",
      "Waste Removal",
    ],
  },
];

export const SERVICE_DROPDOWN_OPTIONS = [
  "Fencing",
  "Grass Cutting",
  "Turf / Astro Laying",
  "Slabbing",
  "Sleeper / Planter Installation",
  "Hedge Cutting / Removal",
  "Tree / Stump Removal",
  "Pressure Washing",
  "Garden Clearance",
  "Decking / Patio Cleaning",
  "Shed Base Installation",
  "Waste Removal",
  "Other",
];

/**
 * Centralized image data structure.
 * All image URLs can easily be replaced here with the company's real project photographs.
 */
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=2000&q=85",
  aboutTransformation:
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "work-1",
    title: "Timber Boundary Fencing",
    category: "Fencing & Installation",
    description: "New wooden boundary fence with clean ground lines and sturdy post installation.",
    imageUrl:
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1400&q=85",
    alt: "High quality wooden garden boundary fencing and landscaped garden lawn",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "work-2",
    title: "Fresh Lawn & Turf Laying",
    category: "Garden & Landscaping",
    description: "Even soil preparation, leveling, and freshly laid lush natural turf.",
    imageUrl:
      "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=85",
    alt: "Pristine freshly laid green lawn with manicured edges and wooden fence",
  },
  {
    id: "work-3",
    title: "Stone Slabbing & Patio Paving",
    category: "Garden & Landscaping",
    description: "Durable stone paving and outdoor slabbing for clean seating and dining areas.",
    imageUrl:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern stone patio slabbing and landscaped outdoor living space",
  },
  {
    id: "work-4",
    title: "Timber Sleepers & Raised Planters",
    category: "Fencing & Installation",
    description: "Solid timber sleeper retaining walls and raised planting beds.",
    imageUrl:
      "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=1200&q=85",
    alt: "Heavy timber sleepers installed as garden beds and retaining planter borders",
  },
  {
    id: "work-5",
    title: "Garden Clearance & Site Tidy",
    category: "Garden & Landscaping",
    description: "Removal of dense overgrowth, dead brambles, and site debris for fresh use.",
    imageUrl:
      "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=85",
    alt: "Neat, cleared, usable garden space ready for transformation",
  },
  {
    id: "work-6",
    title: "Decking & Patio Jet Wash Cleaning",
    category: "Maintenance & Cleaning",
    description: "Deep pressure cleaning restoring weathered decking and stone paths.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85",
    alt: "Pressure cleaned outdoor decking and restored clean patio surfaces",
    span: "md:col-span-2",
  },
];
