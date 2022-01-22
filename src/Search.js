import React, { useState } from 'react'
import Map from './Map';

const Search = () => {
    const [cityData, setCityData] = useState({
        current: {
            condition : {
                text: '',
                icon: '',
            },
            feelslike_c: 0,
            humidity: 0,
            pressure_mb: 0,
            temp_c: 0,
            vis_km: 0,
            wind_kph: 0,
        },
        location: {
            name: '',
            lat: 0,
            lon: 0,
        },
    });
    const [searchCity, setSearchCity] = useState('');
    const [extraInfo, setExtraInfo] = useState(false);

    const submitHandler = async (evt) => {
        evt.preventDefault();
        console.log(searchCity);
        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchCity}&aqi=yes`;
        const res = await fetch(url);
        const data = await res.json();
        setCityData(data);
        setExtraInfo(true);
        setSearchCity('');
    }

    return (
        <div className='row container-fluid'>
            <div className='col-lg-3'>

                {/* search form  */}
                <form onSubmit={submitHandler}>
                    <div className="input-search">
                        <label>Search for cities, states or country name</label>
                        <div className="search-place">
                            <input value={searchCity} onChange={(evt) => setSearchCity(evt.target.value)} placeholder="e.g. New Dehli" name="search" />
                            <button type="submit">Search</button>
                        </div>
                    </div>
                </form>

                {/* info about weather  */}
                {
                    extraInfo ?
                    (<div className='weather-info'>
                        <div id='img' >
                            <img src={cityData.current.condition.icon} alt='icon' />
                            <h2>{cityData.current.temp_c}°C</h2>
                        </div>
                        <div id='extra-info'>
                            <h2>{cityData.current.condition.text}</h2>
                            <h4>Feels like:  {cityData.current.feelslike_c}°C</h4>
                            <h4>Visibility:  {cityData.current.vis_km}km</h4>
                            <h4>Pressure:  {cityData.current.pressure_mb}hPa</h4>
                            <h4>Humidity:  {cityData.current.humidity}%</h4>
                            <h4>Wind Speed:  {cityData.current.wind_kph}kph</h4>
                        </div>
                    </div>) :
                    null 
                }
            </div>

            {/* map  */}
            <div className='col-lg-9 map-container'>
                <Map citydata={cityData} />
            </div>
        </div>
    )
}

export default Search
