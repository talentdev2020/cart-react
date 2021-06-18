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
        console.log({id})
        dispatch(deleteCart(id));
    }
    return (
        <div className=''>
            <h2>My Order</h2>

           {
               carts.map(item => {
                   return (
                       <Cart key={item._id} item ={item} deleteCart={onDeleteCart}/>
                   )
               })
           }             
        </div>
    )
}

export default CartContainer;