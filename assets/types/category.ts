import { Product } from './product';

export type Category = {
  name: string;
  imageUrl: string;
  slug: string;
  products: Product[];
};
