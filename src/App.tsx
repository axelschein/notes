import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import StyledButton from './shared/StyledButton'
import TextInputField from './components/TextInputField';

function App() {

  return (
    <>
      <TextInputField  isLoading={false} />
      <StyledButton isLoading={false} text="button" icon={<SendIcon />} onClick={()=> console.log("click")}/>
        
    </>
  )
}

export default App
