export interface Product {
  id: Number;
  name: String;
  category: String;
  description: String;
  image: String;
  price: number;
  stock: number;
  quantity?: number;
  subtotal?: number;
  total?: number;
}

export interface Cart {
  products: Product[];
  total: number;
}
