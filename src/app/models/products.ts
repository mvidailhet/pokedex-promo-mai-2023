export interface Category {
  subCategories?: { [key: string] : Category };
}

export interface Product {
  name: string;
  price: number;
  id: number;
  category: Category;
}

export type Products = Clothe | Computer;

export interface Clothe extends Product {
  color: string;
}

export interface Computer extends Product {
  'processor-power': string;
  ram: {
    value: number;
    unit: string;
  }
}


