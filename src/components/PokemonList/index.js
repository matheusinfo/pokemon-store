import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import {ProductList} from './styles';

const PokemonList = (props) => {
    const idPokemon = props.listID;

    return(
        <ProductList>
          {idPokemon.map((value, id) => {return <Pokemon key={id} id={value}/>})}
        </ProductList>
    )
}

PokemonList.propTypes = {
  listId: PropTypes.arrayOf(PropTypes.string)
}

export default PokemonList;