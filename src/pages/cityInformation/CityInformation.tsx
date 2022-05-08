import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, TypedDispatch} from '../../store';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import {HourlyWeather} from '../../store/types';
import {getWeatherFullInformation} from '../../store/actions/weatherActions';
import WeatherAttribute from '../../components/ui/WeatherAttribute/WeatherAttribute';
import HourlyCube from '../../components/ui/HourlyСube/HourlyСube';

interface locationState {
    tempNow: number;
    lat: number;
    lon: number;
    humidity: number;
    windSpeed: number;
}

const CityInformation: React.FC = (): JSX.Element => {
    const dispatch = useDispatch<TypedDispatch>();
    const location = useLocation();
    const {tempNow, lat, lon, humidity, windSpeed} = location.state as locationState;
    const cityFullInformation = useSelector((state: RootState) => state.weather.cityFullInformation);

    useEffect(() => {
        dispatch(getWeatherFullInformation(lat, lon));
    }, [])


    return (
        <div style={{textAlign: 'center'}}>
            <WeatherAttribute title='Timezone' value={cityFullInformation?.timezone} variant={'h1'} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={`http://openweathermap.org/img/wn/${cityFullInformation?.current.weather[0].icon}.png`} width={100} alt="weatherIcon"/>
                <Typography
                    sx={{color: 'secondary.dark'}}
                    component={'span'}
                    variant="h1"
                >{cityFullInformation?.current.weather[0].description}</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <WeatherAttribute title='Min' value={`${cityFullInformation?.daily[0].temp.min} °C`} />
                <WeatherAttribute title='Temp Now' value={`${tempNow} °C`} />
                <WeatherAttribute title='Max' value={`${cityFullInformation?.daily[0].temp.max} °C`} />
            </div>
            <WeatherAttribute title='Feels Like' value={`${cityFullInformation?.current.feels_like} °C`} />
            <WeatherAttribute title='Wind deg' value={cityFullInformation?.current.wind_deg} />
            <WeatherAttribute title='Wind speed' value={`${windSpeed} m/s`} />
            <WeatherAttribute title='Humidity' value={`${humidity} %`} />
            <Typography sx={{color: 'primary.main', marginTop: '24px !important'}} variant="h2">
                Hourly forecast for 24 hours
            </Typography>
            <div style={{display: 'flex', alignItems: 'end', justifyContent: 'center', margin: 50}}>
                {cityFullInformation?.hourly?.slice(0, 24).map((item: HourlyWeather, index: number) => (
                    <HourlyCube
                        key={index}
                        hour={new Date(item?.dt * 1000).getHours()}
                        temp={item?.temp}
                    />
                ))}
            </div>
        </div>
    );
}

export default CityInformation;
