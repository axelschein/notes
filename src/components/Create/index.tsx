import React from 'react';
import { CreateProps } from './types';
import { CreateWrapper } from './styles';
import StyledButton from '../../shared/StyledButton';
import TextInputField from '../TextInputField';
import SendIcon from '@mui/icons-material/Send';


const Create = ({ isLoading }: CreateProps): JSX.Element => {
    return (
        <CreateWrapper>
            <TextInputField  isLoading={isLoading} />
            <StyledButton isLoading={isLoading} text="button" icon={<SendIcon />} onClick={()=> console.log("click")}/>
        </CreateWrapper>)
};

export default Create;