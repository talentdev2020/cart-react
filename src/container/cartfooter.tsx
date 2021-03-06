import { useSelector } from 'react-redux';
import { RootState } from "../interfaces";
import { useState, useEffect } from 'react';

const CartContainer = () => {
    const carts = useSelector(
        (state: RootState) => state.cart.carts,
    );
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sum = carts.reduce((total, item) => {
            return total + item.tradePrice;
        }, 0);

        setTotal(sum);
    }, [carts]) 

    return (
        <div>
            <div className='flex-between'>
                <div className='checkout-label'>Total</div>
                <div className='checkout-label'>${total}</div>
            </div>
           
           <div className='btn-checkout'>Checkout</div>
        </div>
    )
}

export default CartContainer;