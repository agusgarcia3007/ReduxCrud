import { ADD_ITEM, ADDING_OK, ADDING_ERROR } from '../types';
import axios from 'axios';

//create new items
export function createItem(item){
    return async (dispatch) => {
        dispatch( addItem() );

        try {
            await axios.post('http://localhost:4000/items', item);
            dispatch( addingOk(item) )
        } catch (error) {
            console.log(error)
            dispatch( addingError(true) );
        }
    }
}

const addItem = () => ({
    type: ADD_ITEM
});

const addingOk = item => ({
    type: ADDING_OK,
    payload: item
});

const addingError = state => ({
    type: ADDING_ERROR,
    payload: state
});