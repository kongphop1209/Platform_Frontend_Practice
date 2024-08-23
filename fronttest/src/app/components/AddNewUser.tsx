import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddNewUser = () => {
  return (
    <div className='inline-flex mt-4 flex-none w-1/4 justify-center'>
        <button className='inline-flex items-center w-max text-sm gap-1 bg-blue-400 text-white px-3 py-3 rounded-md hover:bg-blue-500'>
            <FontAwesomeIcon icon={faPlus} className='font-bold' />
            <b className=''>Add New User</b>  
        </button>
    </div>
  )
}

export default AddNewUser