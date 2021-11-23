import React, { useEffect } from 'react';

//redux
import { useSelector, useDispatch} from 'react-redux';
import { gettingItems } from '../actions/itemActions';
import Item from './Item';

const Items = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        
        const showItems = () => dispatch(
            gettingItems()
        );

        showItems();
    }, [dispatch]);

    const items = useSelector( state => state.items.items);
    const error = useSelector( state => state.items.error);
    const loading = useSelector( state => state.items.loading);


    return ( 
        <>
            <h2 className="text-center my-5 recrud items">Items</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">An error occurred</p> : null}
            {loading ? <p className='text-center loading'>Loading...</p> : null}

            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { items.length === 0 ? 'No items available' : (
                        items.map(item => (
                            <Item 
                                key={item.id}
                                item={item}
                            />         
                    ))
                    )}
                </tbody>
            </table>
        </>
     );
}
 
export default Items;