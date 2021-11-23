import { ADD_ITEM, ADDING_OK, ADDING_ERROR, GETTING_ITEMS, GETTING_OK, GETTING_ERROR, REMOVE_ITEM, REMOVE_OK, REMOVE_ERROR, UPDATE_ITEM, 
    START_UPDATE ,UPDATE_ERROR, UPDATE_OK } from '../types';
import axios from 'axios';
import Swal from 'sweetalert2';

//create new items
export function createItem(item){
    return async (dispatch) => {
        dispatch( addItem() );

        try {
            await axios.post('http://localhost:4000/items', item);
            dispatch( addingOk(item) );

            //sweetalert
            Swal.fire(
                'You did it!',
                'Your item was succesfully added',
                'success'
            );

            
        } catch (error) {
            dispatch( addingError(true) );

            // sweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "We couldn't add your item"
            })
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

export function gettingItems(){
    return async (dispatch) => {
        dispatch( getItems() );

        try {
            const resp = await axios.get('http://localhost:4000/items');
            dispatch( gettingOk(resp.data) )
        } catch (error) {
            dispatch( gettingError() )
        }
    }
}

const getItems = () => ({
    type: GETTING_ITEMS
});

const gettingOk = items => ({
    type: GETTING_OK,
    payload: items
});

const gettingError = () => ({
    type: GETTING_ERROR,
    payload: true
})

export function removeProduct (id) {
    return async (dispatch) => {
        dispatch( delItem(id) )

        try {
            await axios.delete(`http://localhost:4000/items/${id}`);
            dispatch(delItemOk());

            Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
             } )
        } catch (error) {
            dispatch( delItemError() )
        }
    }
}
const delItem = id => ({
    type: REMOVE_ITEM,
    payload: id
})
const delItemOk = () => ({
    type: REMOVE_OK
})
const delItemError = () => ({
    type: REMOVE_ERROR,
    payload: true
});

export function chosenItem (item){
    return(dispatch) => {
        dispatch( getChosenItem(item) );
    }
}

const getChosenItem = item => ({
    type: UPDATE_ITEM,
    payload: item
});

export function updateItemAction(item){
    return async (dispatch) => {
        dispatch( updateItem(item) )
        try {
            await axios.put(`http://localhost:4000/items/${item.id}`, item);
            dispatch( updateItemOk(item))
        } catch (error) {
         console.log(error)   
        }
    }

};

const updateItem = () => ({
    type: START_UPDATE
});

const updateItemOk = item => ({
    type: UPDATE_OK,
    payload: item
});

