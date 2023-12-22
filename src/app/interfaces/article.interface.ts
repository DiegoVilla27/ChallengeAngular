export interface IArticle {
  artist: string;
  city: string;
  date: string;
  price: number;
  category: string;
}

export interface IFormFilter {
  [key: string]: string | number;
}
