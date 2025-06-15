

import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Project = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  heroImage: ImageSourcePropType;
  category: Omit<Category, 'projects'>;
  maxQuantity: number;
};

