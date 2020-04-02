export interface Recipe {
  type: TypeRecipe['type'];
  id: string;
  title: string;
  description: string;
  image: string;
  structure: Array<Structure>;
  recipe: Array<Process>;
}

export interface TypeRecipe {
  type: string;
}

export interface Structure {
  title: string;
  quantity: string;
}

export interface Process {
  description: string;
  images: [string];
}
