export interface ProductModelServer {
  id: Number;
  name: String;
  category: String;
  description: String;
  image: String;
  price: number;
  quantity: number;
}

export interface serverResponse {
  products: ProductModelServer[];
}
