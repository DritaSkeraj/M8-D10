import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExtendedWeather} from '../actions/index'
import store from '../store/index'
import './weather.css'

const ShowWeather: any = (weatherObj:any) => {

    const celsius = (weatherObj.data.main.temp - 273.15).toFixed(2);

    const pos = useSelector((state: any) => state.weather.position);
    let lon = 0
    let lat = 0
    if(pos){
         lon = pos[0];
         lat = pos[1];
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExtendedWeather(lon, lat))
    }, []);

    const extended = weatherObj.extended;

    return(
        <div>
            
            <h3>{weatherObj.data.name} - {weatherObj.data.sys.country}</h3>
            <p>{weatherObj.data.weather[0].description}</p>
            <p>
                <img src={`http://openweathermap.org/img/wn/${weatherObj.data.weather[0].icon}.png`} alt="" />
            </p>
            <p>temp {celsius}<sup>&#8451;</sup></p>
            <p>humidity: {weatherObj.data.main.humidity}</p>
            <p>pressure: {weatherObj.data.main.pressure}</p>
            <p>wind: {weatherObj.data.wind.speed} m/s</p>
            
            <h3>extended weather</h3>
            <h2>daily</h2>
            {console.log('extended:::::::::::', extended)}
            {extended ? extended.daily.map((data:any, key: number) => 
            <div>
                <h4>day {key}</h4>
                <p>temp: day: {data.temp.day}, eve: {data.temp.eve}, max: {data.temp.max}, 
                min: {data.temp.min}, morn: {data.temp.morn}, night: {data.temp.night} </p>
                <p>feels like: day:{data.feels_like.day}, eve:{data.feels_like.eve}, 
                morn: {data.feels_like.morn}, night: {data.feels_like.night}</p>
                <p>humidity: {data.humidity}</p>
                <p>pressure: {data.pressure}</p>
                <p>wind speed: {data.wind_speed}</p>
                <p>wind_deg: {data.wind_deg}</p>
                <p>weather: {data.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
            </div>
            ) : <p>...</p>}
            <h2>hourly</h2>
            {extended ? extended.hourly.map((data:any, key: number) => 
            <>
                <h4>{key}</h4>
                <p>temp: {data.temp}</p>
                <p>feels like: {data.feels_like}</p>
            </>
            ): <p>...</p>}

        </div>
    );
}

export default ShowWeather;