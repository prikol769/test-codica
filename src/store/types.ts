export const ADD_WEATHER_CITY = 'ADD_WEATHER_CITY';
export const DELETED_WEATHER_CITY = 'DELETED_WEATHER_CITY';
export const UPDATE_WEATHER_CITY = 'UPDATE_WEATHER_CITY';
export const GET_WEATHER_FULL_INFORMATION = 'GET_WEATHER_FULL_INFORMATION';
export const GET_WEATHER_CITIES = 'GET_WEATHER_CITIES';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export interface HourlyWeather {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pop: number;
    pressure: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: Weather[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
}

export interface WeatherDataFullInformation {
    current: {
        weather: Weather[];
        feels_like: number;
        wind_deg: number;
    };
    daily: [{
        temp: {
            min: number;
            max: number;
        }
    }];
    hourly: HourlyWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

export interface WeatherDataList {
    cnt: number;
    list: WeatherData[]
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData[] | [];
    selectedCities: number[] | [];
    loadingIdCard: null | number;
    error: string;
    cityFullInformation: null | WeatherDataFullInformation;
}




interface AddWeatherCityAction {
    type: typeof ADD_WEATHER_CITY;
    payload: WeatherData;
}

interface GetWeatherCitiesAction {
    type: typeof GET_WEATHER_CITIES;
    payload: WeatherDataList;
}

interface GetWeatherFullInformationAction {
    type: typeof GET_WEATHER_FULL_INFORMATION;
    payload: WeatherDataFullInformation;
}

interface UpdateWeatherCityAction {
    type: typeof UPDATE_WEATHER_CITY;
    payload: WeatherData;
}

interface DeletedWeatherCityAction {
    type: typeof DELETED_WEATHER_CITY;
    payload: number;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: number;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction =
    AddWeatherCityAction
    | SetLoadingAction
    | SetErrorAction
    | DeletedWeatherCityAction
    | UpdateWeatherCityAction
    | GetWeatherFullInformationAction
    | GetWeatherCitiesAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}
