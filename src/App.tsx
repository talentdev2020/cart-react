
import { useEffect, useState } from 'react';
import Product from "./pages/product"
import { useDispatch } from 'react-redux';
import { getProducts } from './modules/product';
import HeaderContainer from "./container/header";
import CartContainer from "./container/cart";
import CartFooterContainer from "./container/cartfooter";
import Drawer from "./components/drawer";
import './App.css';
import "./lib/style.scss";

function App() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="App">
        <Product setVisible = {setVisible}/>
        
        <Drawer
            footer={
              <CartFooterContainer />
            }
            body={<CartContainer/>}
            header='My Order'
            onClose={onClose}
            visible={visible}
        >          
        </Drawer>
     
    </div>
  );
}

export default App;
