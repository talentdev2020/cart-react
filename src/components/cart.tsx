import { FunctionComponent } from 'react';
import { ProductInterface } from '../interfaces';

type CartProps = {
    item: ProductInterface,
    deleteCart: Function
}
const Cart: FunctionComponent<CartProps> = ({ item, deleteCart }) => {
    return (
        <div className='product'>
            <div className="cart-body">
                <img alt='product' src={item.itemLink}/>

                <div className='product-body'>
                    <div className='item-title'>{item.itemName}</div>

                    <div className='flex-between'>
                        <div className='cart-price'>${item.tradePrice}</div>
                        <div>1x</div>
                    </div>

       
                        <a href='/' onClick={(e) => {e.preventDefault(); deleteCart(item.id) }} > Delete </a>
                 </div>
            </div>
        </div>
    )
}

export default Cart;