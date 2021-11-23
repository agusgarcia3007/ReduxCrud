import { ADD_ITEM, ADDING_OK, ADDING_ERROR, GETTING_ITEMS, GETTING_OK, GETTING_ERROR, REMOVE_ITEM, REMOVE_OK
    , REMOVE_ERROR, UPDATE_ITEM, UPDATE_ERROR, UPDATE_OK } from '../types';

//each reducer have its own state
const initialState = {
    items: [],
    error: false,
    loading: false,
    remove: null,
    update: null
}

const itemsReducer = function(state = initialState, action){
    switch (action.type) {
        case GETTING_ITEMS:
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
        case REMOVE_ERROR:
        case GETTING_ERROR:
        case ADDING_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GETTING_OK:
            return{
                ...state,
                loading: false,
                error: false,
                items: action.payload
            }
        case REMOVE_ITEM:
            return{
                ...state,
                remove: action.payload
            }
        case REMOVE_OK:
            return{
                ...state,
                items: state.items.filter( item => item.id !== state.remove),
                remove: null
            }
        case UPDATE_ITEM:
            return{
                ...state,
                update: action.payload
            }
        case UPDATE_OK:
            return{
                ...state,
                update:null,
                items: state.items.map( item => 
                    item.id === action.payload.id ?
                    item = action.payload :
                    item
                )
            }
        default:
            return state;
    }
}

export default itemsReducer;