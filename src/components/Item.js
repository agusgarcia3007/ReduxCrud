import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


//redux
import { useDispatch } from 'react-redux';
import {removeProduct, chosenItem} from '../actions/itemActions';

const Item = ({item}) => {

    const { name, price, id} = item;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //confirm delete
    const confirm = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#212529',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
                //put it into the action
                dispatch(removeProduct(id) );
              
            }
          })

        
    }


    const redirect = item => {
        dispatch( chosenItem(item) );
        navigate(`/items/update/${item.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td className='actions '>
                <button type='button' onClick={ () => redirect(item)} className='btn btn-outline-dark ' ><AiOutlineEdit /> </button>
                <button type='button' className="btn btn-outline-danger ml-3" onClick={() => confirm(id)}> <AiOutlineDelete /></button>
            </td>
        </tr>
     );
}
 
export default Item;