import { useWeather } from '../../context/WeatherContext'

const Header = () => {
  const { searchLocation } = useWeather()

  return (
    <header className="App-header">
      <h1>WeatHer App</h1>
      <input
        type="text"
        placeholder="Enter Location"
        onKeyDown={searchLocation}
        onChange={(e) => searchLocation(e)}
      />
    </header>
  )
}

export default Header
