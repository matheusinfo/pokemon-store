/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

import {Types} from './styles';
import api from '../../../services/api';
import typeColors from "../../../styles/typeColors";
import Card from '../../PokemonCard';

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

    return(
        <Card pokemon={pokemon} loading={loading}/>
    )
}


export default PokemonCard;