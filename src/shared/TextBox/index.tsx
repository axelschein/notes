import { TextBoxProps } from './types';
import { TextBoxStyled } from './styles';

const TextBox = ({ isLoading, text }: TextBoxProps): JSX.Element => {
    return (
        <>
            {!isLoading && <TextBoxStyled
                height={120}
                width={120}
                my={4}
                display="flex"
                alignItems="center"
                gap={6}
                p={4}
                sx={{ border: '2px solid grey' }}
                marginTop={0}
                marginLeft={0}

            >
                {text}
            </TextBoxStyled>}
        </>
    )
};

export default TextBox;

