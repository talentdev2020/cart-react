import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../interfaces";

type HeaderProps = {
    setVisible: Function
}

const HeaderContainer: FunctionComponent<HeaderProps> = ({setVisible}) => {
    const carts = useSelector(
        (state: RootState) => state.cart.carts,
    );

    return (
        <div className='carts-container'>
            <div className='carts'  onClick={e => setVisible(true)} />
            <div className='badge'>{carts.length}</div>
        </div>
    )
}

export default HeaderContainer;