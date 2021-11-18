import { ADD_ITEM, ADDING_OK, ADDING_ERROR } from '../types';

//each reducer have its own state
const initialState = {
    items: [],
    error: false,
    loading: false
}

const itemsReducer = function(state = initialState, action){
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                loading: true
            }
        case ADDING_OK:
            return{
                ...state,
                loading: false,
             
                items: [...state.items, action.payload]
            }
        case ADDING_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default itemsReducer;