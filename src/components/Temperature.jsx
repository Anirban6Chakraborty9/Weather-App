import React from 'react'

function Temperature({setCity,stats}) {

  const handleCityChange=(e)=>{
    console.log(e.target.value )
    setCity(e.target.value);
  }

  return (
    <>
      <h1 className='text-center text-slate-200 text-2xl font-semibold font-serif shadow-xl pb-[2px]'>City</h1>

      <div className='flex justify-between'>
          <input className='bg-slate-600 border border-slate-600 placeholder-slate-400 text-slate-200 text-md w-[80%] sm:w-[70%] ml-2 mt-3 pl-2 h-9 focus:outline-none focus:border-slate-400  placeholder:font-normal hover:bg-slate-700 rounded-md' type="search" placeholder='Enter Your City Name' 
          onChange={handleCityChange}
          defaultValue="Durgapur"
          />

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 m-4 ml-2 cursor-pointer hover:stroke-black">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
          </div>

      </div>

      <div className='flex justify-center'>
        
      { stats.isday ?
          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-yellow-400 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>):
          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-12 text-sky-500 mt-1 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>)
          }

        

      </div>

      <div className="flex justify-center items-center font-semibold text-slate-200 ">
        <p className='text-[30px]'>{stats.temp}</p>
        <span className='text-[19px]'>°C</span>
      </div>

      <div className="flex text-center items-center justify-center text-gray-200 font-semibold text-2xl">
        {stats.condition}
      </div>

      <div className="flex flex-col justify-center items-center text-gray-200 text-sm mt-2">
        <p>{stats.time}</p>
        <p>{stats.location}, {stats.country}</p>
      </div>
    </>
  )
}

export default Temperature



