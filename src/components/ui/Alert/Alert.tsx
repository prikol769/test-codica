import React from 'react';
import Alert, {AlertProps} from '@mui/material/Alert';

interface CustomAlertProps extends AlertProps{
    message: string;
    onClose: () => void
}

const CustomAlert: React.FC<CustomAlertProps> = (props: CustomAlertProps): JSX.Element => {
    const {onClose, message} = props;
    return(
        <Alert sx={{width: 300, margin: '5px auto 0 auto'}} onClose={onClose} severity="error">{message}</Alert>
    );
}

export default CustomAlert;
