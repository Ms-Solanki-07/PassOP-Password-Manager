import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white fixed w-full z-10'>
      <div className=" flex justify-between items-center h-12 mycontainer">
        <div className="logo font-bold text-xl">
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <a href="https://github.com/Ms-Solanki-07/PassOP-Password-Manager" target="_blank" rel="noopener noreferrer">
            <button className=' flex justify-center items-center gap-1 bg-green-700 p-1 pr-2 rounded-md'>
              <img className='w-6' src="icons/github.png" alt="" />
              <span className='text-md font-bold text-black'>GitHub</span>
            </button></a>

          <a href="https://www.linkedin.com/in/ms-solanki-07-ms/" target='_blank' rel="noopener noreferrer">
            <button className=' flex justify-center items-center gap-1 bg-green-700 p-1 pr-2 rounded-md'>
              <img className='w-6' src="icons/linkedin.png" alt="" />
              <span className='text-md font-bold text-black'>LinkedIn</span>
            </button></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
