import React from 'react';
import Typography from '@mui/material/Typography';

interface HourlyCubeProps  {
    hour: number;
    temp: number;
}

const HourlyCube: React.FC<HourlyCubeProps> = (props: HourlyCubeProps): JSX.Element => {
    const {hour, temp} = props;
    return (
        <div style={{width: '100%'}}>
            <Typography
                component={'span'}
                sx={{color: 'secondary.dark', paddingBottom: 5}}
                variant="body1">
                {hour}:00
            </Typography>
            <div
                style={{
                    marginBottom: Number(temp.toFixed(0)) * 5,
                    padding: 10,
                    backgroundColor: Number(temp.toFixed(0)) < 12 ? 'rgb(3,84,224, 0.25)' : 'rgba(224, 212, 3, 0.25)'
                }}
            >
                {temp.toFixed(0)}
            </div>
        </div>
    )
}

export default HourlyCube;
