import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AddNewUser: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted.");
    setIsPopupOpen(false);
  };

  return (
    <div className='inline-flex mt-4 flex-none w-1/4 justify-center'>
      <button
        className='inline-flex items-center w-max text-sm gap-1 bg-blue-400 text-white p-3 rounded-md hover:bg-blue-500'
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon icon={faPlus} className='font-bold max-[1140px]:p-1' />
        <b className='max-[1140px]:hidden font-bold'>Add New User</b>
      </button>

      {isPopupOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
          <div className='bg-white p-8 rounded-md shadow-lg w-1/3'>
            <h2 className='text-xl font-bold mb-4'>Add New User</h2>
            <form onSubmit={handleFormSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Username</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>ID</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                  type='email'
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <div className='flex justify-end gap-4'>
                <button
                  type='button'
                  className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md'
                  onClick={handleClosePopup}
                >
                  <b className='text-sm max-[1140px]:hidden'>Cancel</b>
                  <FontAwesomeIcon icon={faMinus} className='text-sm min-[1141px]:hidden' />
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500'
                >
                  <b className='text-sm max-[1140px]:hidden'>Add User</b>
                  <FontAwesomeIcon icon={faPlus} className='text-sm min-[1141px]:hidden' />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewUser;
