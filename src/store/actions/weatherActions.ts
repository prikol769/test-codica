import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {
    ADD_WEATHER_CITY,
    DELETED_WEATHER_CITY,
    UPDATE_WEATHER_CITY,
    GET_WEATHER_FULL_INFORMATION,
    GET_WEATHER_CITIES,
    SET_ERROR,
    SET_LOADING,
    WeatherAction,
    WeatherData,
    WeatherError,
    WeatherDataFullInformation,
    WeatherDataList
} from '../types';

export const addWeatherCity = (city: string): ThunkAction<void, RootState, unknown, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: ADD_WEATHER_CITY,
                payload: resData
            });
        }catch(err:any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const getWeatherCities = (cities: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherDataList = await res.json();
            dispatch({
                type: GET_WEATHER_CITIES,
                payload: resData
            });
        }catch(err:any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const getWeatherFullInformation = (lat: number, lon: number): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherDataFullInformation = await res.json();
            dispatch({
                type: GET_WEATHER_FULL_INFORMATION,
                payload: resData
            });
        }catch(err:any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const updateWeatherCity = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: UPDATE_WEATHER_CITY,
                payload: resData
            });
        }catch(err:any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const deletedWeatherCity = (id: number): WeatherAction => {
    return {
        type: DELETED_WEATHER_CITY,
        payload: id
    }
}


export const setLoading = (id: number): WeatherAction => {
    return {
        type: SET_LOADING,
        payload: id
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
