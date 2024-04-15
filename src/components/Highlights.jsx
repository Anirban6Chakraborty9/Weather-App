import React from 'react'

function Highlights({stats}) {
  return (
    <div className='bg-slate-500 bg-opacity-60 text-slate-200 flex flex-col justify-start items-center p-2 rounded-md text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in cursor-pointer'>
      <h2 className='text-md font-semibold'>{stats.title}</h2>

      <div className='mt-2 flex justify-center items-center gap-1'>
          <span className='text-4xl font-bold'>{stats.value}</span>
          <span className='text-xl font-semibold'>{stats.unit}</span>
      </div>
    
      {   stats.direction ? 
      (<div className='mt-2 flex justify-center items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        <div className='text-lg font-medium'>{stats.direction}</div>
      </div>) :(null)
        
        }

      {  stats.unit=="%" ? 
      (<div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-2 ">
      <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width:`${stats.value}%`}}></div>
    </div>)
      :(null)
        }
    </div>
  )
}

export default Highlights
