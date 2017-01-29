import { Recommendation } from './recommendation';

export interface Book {
  author: string;
  categories: string[];
  isbn: number;
  popularity: number;
  purchaseLink: string;
  recommendation: Recommendation[];
  title: string;
}
