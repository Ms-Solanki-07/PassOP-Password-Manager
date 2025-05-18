import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white w-full bottom-0'>
      <div className=" flex justify-between items-center py-3 mycontainer">
        <p>⚠️ Warning: This password manager is an educational project and should not be used to store real or personal passwords. It uses a single shared database instance for all users without any authentication. This means anyone can view/delete/edit the saved data, including your passwords. Please use only temporary or dummy passwords for testing purposes.</p>
      </div>
    </div>
  )
}

export default Footer
