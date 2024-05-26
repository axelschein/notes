import React from 'react';
import SendIcon from '@mui/icons-material/Send';

import StyledButton from './shared/StyledButton'
import './App.css'

function App() {

  return (
    <>
      <p>hola</p>
     
        <StyledButton isLoading={false} text="button" icon={<SendIcon />} onClick={()=> console.log("click")}/>
        
    </>
  )
}

export default App
