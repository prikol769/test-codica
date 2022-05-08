import React from 'react';
import Typography, {TypographyProps} from '@mui/material/Typography';

interface WeatherAttributeProps extends TypographyProps {
    title: string;
    value: number | string | undefined;
}

const WeatherAttribute: React.FC<WeatherAttributeProps> = (props: WeatherAttributeProps): JSX.Element => {
    const {title, value, variant = 'h3'} = props;
    return (
        <Typography sx={{color: 'secondary.main'}} variant={variant}>{title}: <Typography
            sx={{color: 'secondary.dark'}}
            variant={variant}
            component={'span'}
        >
            {value}
        </Typography>
        </Typography>
    )
}

export default WeatherAttribute;
