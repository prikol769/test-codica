import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import weatherReducer from './store/reducers/weatherReducer';
import alertReducer from './store/reducers/alertReducer';
import {BrowserRouter} from 'react-router-dom';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const renderWithRedux = (
    component,
        {initialState, store = createStore(rootReducer, initialState)} = {}
) => {
    return {
        ...render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>),
        store
    }
}

describe('App component', () => {
    test('it renders', () => {
        renderWithRedux(<App />);

        expect(screen.getByText('Enter city name and press search button')).toBeInTheDocument();
    });
})

