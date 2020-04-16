import produce from 'immer';

import { 
    ADD_TEXT
  } from '../constants/actions';

const initialState = {
    text: '',
    texts: ['Agrega un nuevo texto, este esta cargado en el initialState en "~/reducers/text.js"']
}

export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_TEXT:
            return produce(state,(draffState)=>{
                draffState.texts.push(action.payload);
            });
        default:
            return state;
    }
}