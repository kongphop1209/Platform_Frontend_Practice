import React from 'react'

const UsersInfo = () => {
  return (
    <div className='w-full mt-4'>
        <div className='bg-blue-400 mx-5 py-2'>
          <span>
            <ul className='flex flex-row mx-8'>
              <li className='flex-none w-1/12 flex justify-start'>ID</li>
              <li className='flex-none w-1/4 flex justify-start'>Username</li>
              <li className='flex-none w-1/4 flex justify-start'>Name</li>
              <li className='flex-none w-1/3 flex justify-start'>Email</li>
            </ul>
          </span>
        </div>
    </div>
  )
}

export default UsersInfo