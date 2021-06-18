import { FunctionComponent } from 'react';
import { Image, Popconfirm} from 'antd';
import { ProductInterface } from '../interfaces';
import { DeleteOutlined } from '@ant-design/icons';

type CartProps = {
    item: ProductInterface,
    deleteCart: Function
}
const Cart: FunctionComponent<CartProps> = ({ item, deleteCart }) => {
    return (
        <div className='product'>
            <div className="cart-body">
                <Image alt='product' src={item.itemLink}/>

                <div className='product-body'>
                    <div className='item-title'>{item.itemName}</div>

                    <div className='flex-between'>
                        <div className='cart-price'>${item.tradePrice}</div>
                        <div>1x</div>
                    </div>

                    <Popconfirm
                        placement="bottomLeft"
                        title="Are you sure to cancel this item?"
                        onConfirm={e => deleteCart(item.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </div>
            </div>
        </div>
    )
}

export default Cart;