import * as actionTypes from './actionTypes';

export function addToCart(pokemon){
    return{
        type: actionTypes.ADD_CART_SUCESS,
        pokemon
    }
}

export function removeFromCart(id){
    return{
        type: actionTypes.REMOVE_CART_SUCESS,
        id
    }
}

export function updateAmount(id, amount){
    return{
        type: actionTypes.UPDATE_AMOUNT_SUCESS,
        id,
        amount
    }
}

export function deletCart(listPokemons){
    return{
        type: actionTypes.DELET_CART_SUCESS,
        listPokemons
    }
}

export function checkOut(){
    return{
        type: actionTypes.CHECKOUT_SUCESS
    }
}
