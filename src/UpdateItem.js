import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { updateItemAction } from './actions/itemActions';
import { useNavigate } from 'react-router';


const UpdateItem = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [item, setItem] = useState({
        name:'',
        price:''
    });

    const itemUpdate = useSelector(state => state.items.update);

    useEffect(()=>{
        setItem(itemUpdate);
    },[setItem, itemUpdate]);


    const formChange = e => {
        setItem({
            ...item,
            [e.target.name] : e.target.value
        })
    }

    if(!item) return null
    const { name, price } = item;


    const handleSubmit = e => {
        e.preventDefault();

        dispatch(updateItemAction(item));
        
        navigate('/');
        window.location.reload();
    }
    

    return (
        <div className="row justify-content-center">
        <div className="col md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold recrud">Update item</h2>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group ">
                            <input
                                type='text'
                                className='form-control mt-3 bootInput'
                                placeholder='Title'
                                name='name'
                                autoComplete='off'
                                value={name}
                                onChange={formChange}
                            />
                        </div>
                        
                        <div className="form-group ">
                            <input
                                type='number'
                                className='form-control mt-3 bootInput'
                                placeholder='$ Price'
                                name='price'
                                value={price}
                                onChange={formChange}
                            />
                        </div>

                        <button type="submit" className='btn btn-dark font-weight-bold text-uppercase d-block w-100 mt-3' > Apply </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default UpdateItem;