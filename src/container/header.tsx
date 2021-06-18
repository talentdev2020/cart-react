import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../interfaces";
import { Badge } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';
type HeaderProps = {
    setVisible: Function
}
const HeaderContainer: FunctionComponent<HeaderProps> = ({setVisible}) => {
    const carts = useSelector(
        (state: RootState) => state.cart.carts,
    );

    return (
        <div className='float-right cart'>
            <Badge count={carts.length} showZero>
                <ShoppingCartOutlined  onClick={e => setVisible(true)} />
            </Badge>
            
        </div>
    )
}

export default HeaderContainer;