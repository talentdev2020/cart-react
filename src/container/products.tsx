import { useSelector, useDispatch } from 'react-redux';
import Product from "../components/product";
import {RootState, ProductInterface} from "../interfaces";
import { addCart } from '../modules/cart';

const ProductsContainer = () => {
    const collection = useSelector(
        (state: RootState) => state.collection.collection,
      );
    const dispatch = useDispatch();

    const onAddCart = (item: ProductInterface) => {
      dispatch(addCart(item));
    }
    return (
        <div className='products'>
          {
            collection && collection.map(item => {
              return (
                <Product item={item} key={item._id} addCart= {onAddCart}/>
              )
            })
          }
        </div>
    )
}

export default ProductsContainer;