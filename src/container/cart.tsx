import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../interfaces";
import Cart from "../components/cart";
import { deleteCart } from '../modules/cart';

const CartContainer = () => {
    const carts = useSelector(
        (state: RootState) => state.cart.carts,
    );
    const dispatch = useDispatch();
    const onDeleteCart = (id: string) => {
        dispatch(deleteCart(id));
    }

    return (
        <div className='cart-products'>
           {
               carts.map(item => {
                   return (
                       <Cart key={item.id} item ={item} deleteCart={onDeleteCart}/>
                   )
               })
           }             
        </div>
    )
}

export default CartContainer;