import {all, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import * as actionsTypes from './actionTypes'; 

export function* checkOut(){
    try{
        yield toast.success("Parabéns, seu pedido foi realizado com sucesso!");
    }catch(error){
        console.log(error)
    }
}

export default all([
    takeLatest(actionsTypes.CHECKOUT_SUCESS, checkOut)
])