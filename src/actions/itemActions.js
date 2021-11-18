import { ADD_ITEM, ADDING_OK, ADDING_ERROR } from '../types';

//create new items
export function createItem(item){
    return (dispatch) => {
        dispatch( addItem() );

        try {
            dispatch( addingOk(item) )
        } catch (error) {
            dispatch( addingError(true) )
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