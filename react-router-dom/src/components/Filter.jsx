import React from 'react';

const Filter = () => {
  return (
    <div className='d-flex justify-content-between align-items-center my-4 gap-3'>
        <div >
            {/*select */}
            <select className='form-select'>
                <option value="">sirala</option>
                <option value="">a-z</option>
                <option value="">z-a</option>
            </select>
        </div>
        <form action="" className='d-flex gap-2'>
            <input type='text' className='form-control' ></input>
            <button className='btn btn-primary'>Ara</button>
        </form>
    </div>
  )
}

export default Filter;
