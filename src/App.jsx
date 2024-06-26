import { useState,useEffect } from 'react'
import './App.css'
import Highlights from './components/Highlights.jsx'
import Temperature from "./components/Temperature.jsx"

function App() {

  const [city,setCity] = useState("Durgapur");
  const [weatherData,setWeatherData] = useState(null);

  useEffect(()=>{

    const api =`https://api.weatherapi.com/v1/current.json?key=7fd37c8545944963af881046242303&q=${city}&aqi=no`

    fetch(api)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setWeatherData(data);
    })
    .catch((e)=>{
      console.log(e);
    })

  },[city])

  return (
    <>
    {/* <h1>Today's Weather</h1> */}
    <div className='bg-[url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg)]  bg-[length:100vw_100vh] h-[100vh] md:bg-center flex flex-col sm:flex-row justify-center align-top items-center sm:gap-20 gap-5'>

      <div className='bg-slate-800 bg-opacity-60 w-[65%] sm:m-auto sm:mr-0 sm:w-1/5 sm:h-fit rounded-md py-2 mt-10'>
        {weatherData && <Temperature 
        setCity={setCity}
        stats={{
          temp: weatherData.current.temp_c,
          condition: weatherData.current.condition.text,
          isday: weatherData.current.is_day,
          location: weatherData.location.name,
          region: weatherData.location.region,
          country: weatherData.location.country,
          time: weatherData.location.localtime
        }}
        />}
      </div>
 
      <div className=' sm:m-auto sm:ml-0 sm:w-1/3 h-[18.3rem] grid grid-cols-2 gap-4 pb-10'>
        <h1 className=' bg-slate-600 bg-opacity-60 text-center text-slate-200 text-2xl font-semibold font-serif shadow-xl pb-[2px] pt-2 rounded-md col-span-2  h-fit'>Today's Highlights</h1>
        {weatherData &&
        (
          <>
            <Highlights
            stats={{
              title: "Wind Status",
              value: weatherData.current.wind_mph,
              direction: weatherData.current.wind_dir,
              unit: "mph"
            }}/>

            <Highlights
            stats={{
              title: "Humidity",
              value: weatherData.current.humidity,
              unit: "%"
            }}/>
            
            <Highlights 
            stats={{
              title: "Visibility",
              value: weatherData.current.vis_miles,
              unit: "miles"
            }}/>

            <Highlights
            stats={{
              title: "Air Pressure",
              value: weatherData.current.pressure_mb,
              unit: "mb"
            }}/>
          </>
        )
        }
      </div>
    </div>
    </>
  )
}

export default App
