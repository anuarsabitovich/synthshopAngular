export interface Product {
  productID: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryID: string;
  isDeleted: boolean;
  category: any;
  createdAt: Date;
  updateAt?: Date;
  pictureUrl: string;
  orderItems?: any[];
}
