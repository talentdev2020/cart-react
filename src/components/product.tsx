import { FunctionComponent } from 'react';
import { ProductInterface } from '../interfaces';

type ProductProps = {
    item: ProductInterface,
    addCart: Function
}

const Product: FunctionComponent<ProductProps> = ({ item, addCart }) => {
    return (
        <div className='product'>
            <img alt='product' src={item.itemLink} />

            <div className='product-body'>
                <div className='item-title'>{item.itemName}</div>
                
                <div className='flex-between'>
                    <div>${item.tradePrice}</div>
                    <div className='item-cart' onClick={e => addCart(item)}> </div>
                </div>
            </div>
        </div>
    )
}

export default Product;