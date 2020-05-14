import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';

import {Container, Footer, Total, ProductTable} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

const Cart = () =>{
    // Redux
    const dispatch = useDispatch();

    const listPokemons = useSelector(state => state.cart.map(pokemon => ({
        ...pokemon,
        totalPrice: pokemon.price * pokemon.amount
    })));

    const subTotal = useSelector(state => state.cart.reduce((total, pokemon) => {
        return total + (pokemon.price * pokemon.amount)
    }, 0));


    function increment(pokemon){
        dispatch(CartActions.updateAmount(pokemon.id, pokemon.amount + 1));
    }

    function decrement(pokemon){
        dispatch(CartActions.updateAmount(pokemon.id, pokemon.amount - 1));
    }

    function checkout(){
        dispatch(CartActions.checkOut());
        dispatch(CartActions.deletCart(listPokemons));
    }

    return(
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>POKÉMON</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {listPokemons.map(pokemon => {
                        return(
                            <tr>
                                <td>
                                    <img src={pokemon.image} alt={pokemon.name}/>
                                </td>

                                <td>
                                    <strong>{pokemon.name}</strong>
                                    <span>R$ {pokemon.price},00</span>
                                </td>

                                <td>
                                    <div>
                                      <button>
                                            <MdRemoveCircleOutline 
                                                size={20} 
                                                color="#cf2233"
                                                onClick={() => decrement(pokemon)}
                                            />
                                        </button>

                                        <input readOnly value={pokemon.amount}/>

                                        <button>
                                            <MdAddCircleOutline 
                                                size={20} 
                                                color="#cf2233"
                                                onClick={() => increment(pokemon)}
                                            />
                                        </button>
                                    </div>
                                </td>

                                <td>R${pokemon.totalPrice},00</td>

                                <td>
                                    <button onClick={() => dispatch(CartActions.removeFromCart(pokemon.id))}>
                                        <MdDelete size={20} color="#cf2233"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </ProductTable>

            <Footer>
                    <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>
                        <button onClick={checkout}>
                                FINALIZAR PEDIDO
                        </button>
                    </Link>
                <Total>
                    <span>TOTAL </span>
                    <strong>R${subTotal},00</strong>
                </Total>
            </Footer>
        </Container>
    )
}

export default Cart;