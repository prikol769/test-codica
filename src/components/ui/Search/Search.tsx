import React, {useState, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {setAlert} from '../../../store/actions/alertActions';
import {addWeatherCity, setLoading} from '../../../store/actions/weatherActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TypedDispatch} from '../../../store';

interface SearchProps {
    title: string;
}

const Search: React.FC<SearchProps> = (props: SearchProps): JSX.Element => {
    const {title} = props;
    const dispatch = useDispatch<TypedDispatch>();
    const [city, setCity] = useState('');

    const changeHandler = (event: React.ChangeEvent<{ value: string }>) => {
        setCity(event.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() === '') {
            return dispatch(setAlert('city field is required!'));
        }
        dispatch(setLoading(-10));
        dispatch(addWeatherCity(city));
        setCity('');
    }

    return (
        <div style={{textAlign: 'center', marginBottom: 10}}>
            <Typography style={{margin: '25px 0'}} variant="h1">{title}</Typography>
            <form onSubmit={submitHandler}>
                <TextField
                    value={city}
                    onChange={changeHandler}
                    placeholder="Enter city name"
                    style={{maxWidth: 300}}
                />
                <Button
                    type="submit"
                    sx={{
                        height: 56,
                        marginLeft: '5px',
                        padding: '10px 15px'
                    }}
                    variant="contained"
                    size="small"
                >
                    ADD CITY
                </Button>
            </form>
        </div>
    );
}

export default Search;
