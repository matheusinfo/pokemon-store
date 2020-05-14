import produce from 'immer';

import * as actionTypes from './actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_SUCESS:
            return produce(state, draft => {
                const pokemonIndex = draft.findIndex(p => p.id === action.pokemon.id);

                if(pokemonIndex >= 0){
                    draft[pokemonIndex].amount += 1;
                }else{
                    draft.push({
                        ...action.pokemon,
                        amount: 1
                    });
                }
            });
        case actionTypes.REMOVE_CART_SUCESS:
            return produce(state, draft => {
                const pokemonIndex = draft.findIndex(p => p.id === action.id);

                if(pokemonIndex >= 0){
                    draft.splice(pokemonIndex, 1);
                }
            })
        case actionTypes.UPDATE_AMOUNT_SUCESS:{
            if(action.amount <= 0) return state;

            return produce(state, draft => {
                const pokemonIndex = draft.findIndex(p => p.id === action.id);

                if(pokemonIndex >= 0){
                    draft[pokemonIndex].amount = action.amount;
                }
            })
        }
        case actionTypes.DELET_CART_SUCESS:   
            return produce(state, draft => {
                const size = state.length;
                let count = 0;

                while(count <= size){
                    draft.pop();
                    count++;
                }
            })
        default:
            return state;
    }
}

export default reducer;

