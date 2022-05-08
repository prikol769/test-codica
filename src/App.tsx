import React from 'react';
import './index.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CityInformation from './pages/cityInformation/CityInformation';
import {getWeatherCities, setLoading} from './store/actions/weatherActions';
import {useDispatch} from 'react-redux';
import {TypedDispatch} from './store';


const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch<TypedDispatch>();

    const localStorageItems = window.localStorage.getItem('selectedCities');
    if(localStorageItems) {
        dispatch(setLoading(-10));
        dispatch(getWeatherCities(localStorageItems.replace(/^.|.$/g,"")));
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:city" element={<CityInformation />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}

export default App;
