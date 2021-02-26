import React from 'react';
import './App.css';
import '././components/ShowWeather.scss'

import {useDispatch, useSelector} from 'react-redux'
import Search from './components/Search';
import ShowWeather from './components/ShowWeather';

function App() {

  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state.weather.data);
  const extendedWeather = useSelector((state: any) => state.weather.extended)
  const loading = useSelector((state: any) => state.weather.loading);
  const error = useSelector((state: any) => state.weather.error);

  return (
    <div className="App">
        <div className='content'>
      <Search />
      {loading ? <h6>loading...</h6> : weatherData && <ShowWeather data={weatherData} extended={extendedWeather}/>}
      {error && <p style={{'color': 'red'}}>{error}
      </p>}
      </div>
      {console.log('')}
      
      {/*<div className="slideshow" >
            <div className="slideshow-image" style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1550248467-b815835f9ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80})` }}></div>
                <div className="slideshow-image" style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1546762013-a0925815c22f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80})` }}></div>
                <div className="slideshow-image" style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1558090183-d3b1e54dc88b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80})` }}></div>
                <div className="slideshow-image" style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1587490777014-964eb5513103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80})` }}></div>
            </div>*/}
    </div>
  );
}

export default App;
