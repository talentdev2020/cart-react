import Products from "../container/products"

const Product = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <img src='images/banner.png'  alt='banner' /> 
                <div className='furniture-text'>Furniture</div>
                <div className='furniture-cart'>CART</div>
            </div>

            <Products />
        </div>
    )
}

export default Product;