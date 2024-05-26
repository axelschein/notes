import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { StyledButtonProps } from './types';
import { StyledButtonWrapper } from './styles';

const StyledButton = ({ isLoading, text, icon, onClick }: StyledButtonProps): JSX.Element => {



    return (
        <StyledButtonWrapper>
            {!isLoading && <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={icon} onClick={onClick}>
                    {text}
                </Button>
            </Stack>}
        </StyledButtonWrapper>)
};

export default StyledButton;


