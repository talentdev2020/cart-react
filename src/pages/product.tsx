import Products from "../container/products"
import { FunctionComponent } from 'react';
type ProductProps = {
    setVisible: Function
}
const Product:FunctionComponent<ProductProps> = ({setVisible}) => {
    return (
        <div className='home'>
            <div className='banner'>
                <img src='images/banner.png'  alt='banner' /> 
                <div className='furniture-text'>Furniture</div>
                <div className='furniture-cart' onClick={e => setVisible(true)}>CART</div>
            </div>

            <Products />
        </div>
    )
}

export default Product;