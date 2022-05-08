import {
    ADD_WEATHER_CITY,
    DELETED_WEATHER_CITY,
    GET_WEATHER_CITIES,
    GET_WEATHER_FULL_INFORMATION,
    SET_ERROR,
    SET_LOADING,
    UPDATE_WEATHER_CITY,
    WeatherAction,
    WeatherState
} from '../types';

const initialState: WeatherState = {
    data: [],
    selectedCities: [],
    loadingIdCard: null,
    error: '',
    cityFullInformation: null,
}

export default (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case GET_WEATHER_CITIES:
            const item = window.localStorage.getItem('selectedCities');
            return {
                ...state,
                selectedCities: item ? JSON.parse(item) : [],
                data: action.payload.list,
                loadingIdCard: null,
                error: ''
            }
        case ADD_WEATHER_CITY:
            if (state.data.find(weatherCity => weatherCity.id === action.payload.id)) {
                return {
                    ...state,
                    loadingIdCard: null,
                    error: 'city already added'
                }
            }
            const addCityId = action.payload.id;
            window.localStorage.setItem('selectedCities', JSON.stringify([...state.selectedCities, addCityId]));
            return {
                ...state,
                selectedCities: [...state.selectedCities, addCityId],
                data: [...state.data, action.payload],
                loadingIdCard: null,
                error: ''
            }
        case UPDATE_WEATHER_CITY:
            const itemIndex = state.data.findIndex(weatherCity => weatherCity.id === action.payload.id);
            const arr = state.data;
            arr[itemIndex] = action.payload;
            return {
                ...state,
                data: arr,
                loadingIdCard: null,
                error: ''
            }
        case GET_WEATHER_FULL_INFORMATION:
            return {
                ...state,
                loadingIdCard: null,
                error: '',
                cityFullInformation: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loadingIdCard: action.payload
            }
        case DELETED_WEATHER_CITY:
            const deletedCity = state.selectedCities.filter(selectedCity => selectedCity !== action.payload)
            window.localStorage.setItem('selectedCities', JSON.stringify(deletedCity));
            if(window.localStorage.getItem('selectedCities') === '[]') {
                window.localStorage.clear();
            }
            return {
                ...state,
                selectedCities: deletedCity,
                data: state.data.filter(weatherCity => weatherCity.id !== action.payload),
                loadingIdCard: null,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loadingIdCard: null
            }
        default:
            return state;
    }
}
