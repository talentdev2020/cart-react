export interface ProductInterface {
    imgURLs: [];
    _id: string;
    tradePrice: number;
    itemLink: string;
    itemName: string;
    id?: string;
  }
export interface RootState {
  product: {
    products: Array<ProductInterface>
    }
    cart: {
      carts: Array<ProductInterface>
    }
}