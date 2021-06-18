import { FunctionComponent } from 'react';
import { Image } from 'antd';
import { ProductInterface } from '../interfaces';
import { ShoppingCartOutlined } from '@ant-design/icons';

type ProductProps = {
    item: ProductInterface,
    addCart: Function
}
const Product: FunctionComponent<ProductProps> = ({ item, addCart }) => {
    return (
        <div className='product'>
            <Image alt='product' src={item.itemLink}/>
            <div className='product-body'>
                <div className='item-title'>{item.itemName}</div>
                <div className='flex-between'>
                    <div>${item.tradePrice}</div>
                    <div className='item-cart'><ShoppingCartOutlined onClick={e => addCart(item)}/></div>
                </div>
            </div>
        </div>
    )
}

export default Product;