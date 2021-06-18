
import React, { useEffect, useState } from 'react';
import Product from "./pages/product"
import { useDispatch } from 'react-redux';
import { getProducts } from './modules/collection';
import { Layout, Drawer } from 'antd';
import HeaderContainer from "./container/header";
import CartContainer from "./container/cart";
import CartFooterContainer from "./container/cartfooter";

import './App.css';
import "./lib/style.scss";
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

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
      <Layout>
        <Header>
          <HeaderContainer setVisible = {setVisible}/>
        </Header>

        <Content>  <Product /></Content>
        <Drawer
            width={640}
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
            className="cart-drawer"
            footer={
              <CartFooterContainer />
            }
        >          
         <CartContainer />
        </Drawer>
      </Layout>
    
    </div>
  );
}

export default App;
