import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import Search from '../../components/ui/Search/Search';
import WeatherCard from '../../components/ui/WeatherCard/WeatherCard';
import Alert from '../../components/ui/Alert/Alert';
import {setAlert} from '../../store/actions/alertActions';
import {setError} from '../../store/actions/weatherActions';
import CircularProgress from '@mui/material/CircularProgress';

const HomePage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loadingIdCard = useSelector((state: RootState) => state.weather.loadingIdCard);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);
    const loading = loadingIdCard && weatherData.length === 0;

    return (
        <div>
            <Search title="Enter city name and press search button"/>
            {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
            {error && <Alert message={error} onClose={() => dispatch(setError())}/>}

            {loading
                ? <CircularProgress />
                : weatherData &&
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: 100}}>
                    {weatherData.map((item) => (
                        <WeatherCard key={item.id} data={item}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default HomePage;
