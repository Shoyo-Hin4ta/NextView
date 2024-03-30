import React from 'react'

const UserForm = () => {
  return (
    <div className='bg-blue-100 h-full w-full grid grid-cols-2 grid-rows-5 gap-8 place-items-center'>
        <div className='border'>
          <input placeholder='Username' name="username" type='text' className='px-4 py-4 rounded-lg'/>
        </div>
        <div>
          <input placeholder='Email' type='text' name="email" className='px-4 py-4 rounded-lg'/>
        </div>
        <div className=''>
          <input placeholder='Password' type='password' name="password" className='px-4 py-4 rounded-lg'/>
        </div>
        <div>
          <input placeholder='Phone' type='number' name="phone" className='px-4 py-4 rounded-lg'/>
        </div>
        <div className=''>

          <select name="isAdmin" id="" className='rounded-lg px-16 py-4 '>
          <option value="">Is Admin ?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <select name="isActive" id="" className='rounded-lg px-16 py-4'>
              <option value="">Is Active ? </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
        </div>
        <div className=' p-2 col-span-2 row-span-2 h-full w-full'>
          <input placeholder='address' name="address" type='text' className='h-full w-full text-center rounded-lg px-16 py-4' />
        </div>
        <div className='text-center w-full col-span-2 p-2'>
          <button className='p-2 rounded-lg bg-blue-400 h-full w-full'>
            Submit
          </button>
        </div>
        
    </div>
  )
}

export default UserForm