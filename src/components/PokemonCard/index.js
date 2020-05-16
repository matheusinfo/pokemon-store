/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {ListItem, Button} from './styles';
import Skeleton from '../Loading';

import * as CartActions from '../../store/modules/cart/actions';

const CardPoke = (props) => {
    // REDUX
    const dispatch = useDispatch();

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, pokemon) => {
          sumAmount[pokemon.id] = pokemon.amount;
    
          return sumAmount;
        }, {})
      );

    return(
        props.loading ? (
            <Skeleton/>
        ) : (
            <ListItem active={false}>
                <div>{props.pokemon.types}</div>
                
                <img src={props.pokemon.image} alt="pokemon"/>

                <strong>{props.pokemon.name}</strong>
                <span>R$ {props.pokemon.price},00</span>

                <Button type="button" onClick={() => dispatch(CartActions.addToCart(props.pokemon))}>
                    <div >
                        <MdAddShoppingCart size={16}/> 
                        {amount[props.pokemon.id] || 0}
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </Button>
            </ListItem>
        )
    )
}


CardPoke.propTypes = {
    loading: PropTypes.bool.isRequired,
    pokemon: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.number,
        types: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
}

export default CardPoke;