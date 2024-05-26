import React from 'react';
import { TextInputFieldProps } from './types';
import { TextInputFieldWrapper } from './styles';
import TextField from '@mui/material/TextField/TextField';

const TextInputField = ({ isLoading }: TextInputFieldProps): JSX.Element => {
    return (
        <TextInputFieldWrapper> 
           {!isLoading && <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={8}
                defaultValue="Default Value"
                variant="filled"
                color='info'
            />}
        
         </TextInputFieldWrapper>)
};

export default TextInputField;