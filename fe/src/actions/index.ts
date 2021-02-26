import {ThunkAction} from 'redux-thunk';

export const getWeather = (city: string): ThunkAction<any, any, any, any> => {
    return async dispatch => {
        try {
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`);
            if(!data.ok) {
                const res: any = await data.json();
                throw new Error(res.message)
            }
            const res:any = await data.json();
            dispatch({
                type: 'GET_WEATHER',
                payload: res
            });
            dispatch({
                type: 'SET_POSITION',
                payload: [res.coord.lon, res.coord.lat]
            })
        } catch(error){
            dispatch({
                type: 'SET_ERROR',
                payload: error.message
            })
        }
    }
}

export const getExtendedWeather = (lon:any, lat:any): ThunkAction<any, any, any, any> => {
    return async dispatch => {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
            if(!data.ok) {
                const res: any = await data.json();
                throw new Error(res.message)
            }
            const res:any = await data.json();
            dispatch({
                type: 'SET_EXTENDED_WEATHER',
                payload: res
            })
        } catch(error){
            dispatch({
                type: 'SET_ERROR',
                payload: error.message
            })
        }
    }
}

export const setLoading = (): any => {
    return {
        type: 'SET_LOADING'
    }
}

export const setError = (): any => {
    return{
        type: 'SET_ERROR',
        payload: ''
    }
}