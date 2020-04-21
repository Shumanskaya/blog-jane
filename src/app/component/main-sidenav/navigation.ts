export interface Navigation {
  name: string;
  category: Array<Category>;
}

export interface Category {
  name: string;
  path: string;
}
