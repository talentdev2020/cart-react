import { Image } from 'antd';
import Products from "../container/products"
const Product = () => {
    return (
        <div className='home'>
            <div className='banner'>
             <Image src='images/banner.png'  alt='banner' /> 
            </div>
            <Products />
           
        </div>
    )
}

export default Product;