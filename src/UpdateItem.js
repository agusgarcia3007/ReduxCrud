import React from 'react'

const UpdateItem = () => {
    return (
        <div className="row justify-content-center">
        <div className="col md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold recrud">Update item</h2>

                    <form>
                        <div className="form-group ">
                            <input
                                type='text'
                                className='form-control mt-3 bootInput'
                                placeholder='Title'
                                name='name'
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className="form-group ">
                            <input
                                type='number'
                                className='form-control mt-3 bootInput'
                                placeholder='$ Price'
                                name='price'
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