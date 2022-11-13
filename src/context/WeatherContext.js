import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({})

  const [location, setLocation] = useState('baku')
  const API_KEY = '35d0862e469c3639c359d81c01cfbb36'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

  useEffect(() => {
    getData()
  }, [location])

  const getData = () => {
    axios.get(URL).then((res) => {
      setData(res.data)
    })
  }

  const searchLocation = (e) => {
    if (e.key === 'Enter' && e != '') {
      e.preventDefault()
      getData()
      setLocation(e.target.value)
    }
  }

  const values = {
    data,
    searchLocation
  }
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  )
}
const useWeather = () => useContext(WeatherContext)

export {  WeatherProvider, useWeather}
