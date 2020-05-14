import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';

import {Container, Cart} from './styles';
import Logo from '../../assets/Logo.png';

const Header = () => {
    const cartSize = useSelector(state => state.cart);

    return(
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logo" width="230px"/>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize.length || 0} itens</span>
                </div>
                <MdShoppingCart size={35}/>
            </Cart>
        </Container>
    )
}

export default Header;