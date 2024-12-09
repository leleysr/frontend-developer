interface Installment {
  quantity: number;
  value: number;
}

export interface Product {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: Installment[];
}

export interface CartData {
  id: string;
  quantity: number;
}
