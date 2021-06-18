export interface ProductInterface {
    imgURLs: [];
    _id: string;
    tradePrice: number;
    itemLink: string;
    itemName: string;
    id?: string;
  }
export interface RootState {
    collection: {
      collection: Array<ProductInterface>
    }
    cart: {
      carts: Array<ProductInterface>
    }
}