import { Project } from './project';

export type Category = {
  name: string;
  imageUrl: string;
  slug: string;
  projects: Project[];
};
