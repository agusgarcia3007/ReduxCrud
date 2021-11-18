import React, { useState } from 'react';

//redux actions
import {createItem} from '../actions/itemActions';

//function to use action
import { useDispatch, useSelector } from 'react-redux';



const NewItem = () => {

    //local useState
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    //useDispatch
    const dispatch = useDispatch();

    //use action
    const addItem = item => dispatch( createItem(item) )

    const handleSubmit = e => {
        e.preventDefault();

        //validation
        if(name.trim() === '' || price <= 0){
            return;
        }

        addItem({
            name,
            price
        });
}

    return ( 
        <div className="row justify-content-center">
            <div className="col md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold recrud">Add new item</h2>

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
                                    onBlur={e => setName(e.target.value)}
                                />
                            </div>
                            
                            <div className="form-group ">
                                <input
                                    type='number'
                                    className='form-control mt-3 bootInput'
                                    placeholder='$ Price'
                                    name='price'
                                    onChange={e => setPrice(parseInt(e.target.value))}
                                />
                            </div>

                            <button type="submit" className='btn btn-dark font-weight-bold text-uppercase d-block w-100 mt-3' > Add </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewItem;