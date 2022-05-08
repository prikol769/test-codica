import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {WeatherData} from '../../../store/types';
import {Link} from 'react-router-dom';
import {setLoading, deletedWeatherCity, updateWeatherCity} from '../../../store/actions/weatherActions';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {RootState, TypedDispatch} from '../../../store';

interface WeatherProps {
    data: WeatherData;
}

const WeatherCard: React.FC<WeatherProps> = (props: WeatherProps): JSX.Element => {
    const {data} = props;
    const dispatch = useDispatch<TypedDispatch>();
    const loadingIdCard = useSelector((state: RootState) => state.weather.loadingIdCard);

    const updateCard = (event: { preventDefault(): void; }) => {
        event.preventDefault();
        dispatch(setLoading(data.id));
        dispatch(updateWeatherCity(data.name));
    }

    const deletedCard = (event: { preventDefault(): void; }) => {
        event.preventDefault();
        dispatch(deletedWeatherCity(data.id));
    }

    return (
        <Link
            style={{margin: 10}}
            to={`/${data.name}`}
            state={{
                tempNow: data.main.temp,
                lat: data.coord.lat,
                lon: data.coord.lon,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed
            }}
        >
            <Card sx={{width: 275, textAlign: 'center', minHeight: 400}}>
                {loadingIdCard === data.id
                    ? <CircularProgress/>
                    : <>
                        <CardContent>
                            <Typography variant="h1">{data.name}</Typography>
                            <img
                                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                                width={100}
                                alt="weatherIcon"
                            />
                            <Typography
                                sx={{color: 'secondary.main', textAlign: 'center'}}
                                variant="body2">Now <Typography sx={{color: 'secondary.dark'}}
                                                                variant="h3">{data.main.temp} °C</Typography>
                            </Typography>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                <Typography
                                    sx={{color: 'secondary.main'}}
                                    variant="body2">Humidity <Typography sx={{color: 'secondary.dark'}}
                                                                         variant="h4">{data.main.humidity} %</Typography>
                                </Typography>
                                <Typography
                                    sx={{color: 'secondary.main'}}
                                    variant="body2">Wind speed<Typography sx={{color: 'secondary.dark'}}
                                                                          variant="h4">{data.wind.speed} m/s</Typography>
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button
                                onClick={(event: { preventDefault(): void; }) => updateCard(event)}
                                sx={{color: 'success.main'}}
                                size="small"
                            >
                                update now
                            </Button>
                            <Button
                                onClick={(event: { preventDefault(): void; }) => deletedCard(event)}
                                sx={{color: 'error.main'}}
                                size="small"
                            >
                                delete
                            </Button>
                        </CardActions>
                    </>
                }
            </Card>
        </Link>
    );
}

export default WeatherCard;
