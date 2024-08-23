"use client";

import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from './SearchBar'
import UsersInfo from './UsersInfo'
import AddNewUser from './AddNewUser'

const Board: React.FC = () => {
  return (
    
    <div className='flex flex-col w-2/3 h-2/3 bg-slate-200 border-blue-200 border-y border-x rounded-lg'>
        <div className='h-12 w-full bg-blue-400 flex justify-start items-center rounded-t-md'>
            <p className='ms-5 inline-flex flex-row items-center gap-2 text-white'>
              <FontAwesomeIcon icon={faUser} className='size-5' />
              User Management
            </p>
        </div>
        <div className='flex items-center'>
          <SearchBar/>
          <AddNewUser/>
        </div>
        <UsersInfo/>
    </div>
  )
}

export default Board