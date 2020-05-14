import React from 'react';

import PokemonCard from './PokemonCard';
import {ProductList} from './styles';

const PokemonList = (props) => {
    const idPokemon = props.listID;

    return(
        <ProductList>
          {idPokemon.map((value, id) => {return <PokemonCard key={id} id={value}/>})}
        </ProductList>
    )
}

export default PokemonList;