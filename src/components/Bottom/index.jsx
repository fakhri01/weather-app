import { useWeather } from '../../context/WeatherContext'

const Bottom = () => {
  const { data } = useWeather()

  return (
    <section className="App-bottom">
      <div>
        <h1>{data.name}</h1>
        <p className="desc">
          {data.weather ? data.weather[0].description : null}
        </p>
      </div>
      <div>
        <ul>
          <li>
            <p>{data.main ? data.main.temp.toFixed() : null}°C</p>
            <p className="bold">Temperature</p>
          </li>
          <li>
            <p>{data.main ? data.main.humidity : null}%</p>
            <p className="bold">Humidity</p>
          </li>
          <li>
            <p>{data.wind ? data.wind.speed.toFixed() : null} km/h</p>
            <p className="bold">Wind Speed</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Bottom
