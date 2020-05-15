/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {MdAddShoppingCart} from 'react-icons/md';
import {useDispatch} from 'react-redux';

import {ListItem, Button, Types} from './styles';
import api from '../../../services/api';
import typeColors from "../../../styles/typeColors";
import Skeleton from '../../Skeleton';

import * as CartActions from '../../../store/modules/cart/actions';

const PokemonCard = (props) => {
    // Hooks
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadPokemons(){
            setLoading(true);
           const response = await api.get(props.id);

           // Separando os tipos dos pokémons
           const types = response.data.types.map((poke,id) => {
               return <Types color={typeColors[poke.type.name]} key={id}>{poke.type.name}</Types>
           })

           setPokemon({
               id: response.data.id,
               image: response.data.sprites.front_default, 
               types,
               name: response.data.name,
               price: response.data.base_experience * 25
            })

            setLoading(false);
        }

        loadPokemons();
    }, []);

    // Redux
    const dispatch = useDispatch();
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, pokemon) => {
          sumAmount[pokemon.id] = pokemon.amount;
    
          return sumAmount;
        }, {})
      );

    return(
            loading ? (
                <Skeleton/>
            ) : (
                <ListItem active={false}>
                    <div>{pokemon.types}</div>
                
                    <img src={pokemon.image} alt="pokemon"/>

                    <strong>{pokemon.name}</strong>
                    <span>R$ {pokemon.price},00</span>

                    <Button type="button" onClick={() => dispatch(CartActions.addToCart(pokemon))}>
                        <div >
                            <MdAddShoppingCart size={16}/> 
                            {amount[pokemon.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </Button>
                </ListItem>
            )
    )
}

export default PokemonCard;