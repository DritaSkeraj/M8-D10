import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getWeather, setLoading} from '../actions/index'
import './weather.css'

const Search:any = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (event: any) => {
        setCity(event.currentTarget.value);
    }

    const submitHandler = (event:any) => {
        event.preventDefault();
        if(city.trim() === ''){
            window.alert('search by city name')
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    return(
        <div className='search'>
            <h2>Search by city name: </h2>
            <form onSubmit={submitHandler}>
                <input 
                    type='text'
                    placeholder='city'
                    value={city}
                    onChange={searchHandler}
                />
            </form>
        </div>
    )
}

export default Search;