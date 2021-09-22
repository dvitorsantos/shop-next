export interface ProductImages {
  url: string;
  alt?: string;
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  description: string;
  path: string;
  slug: string;
  images: ProductImages[];
}
