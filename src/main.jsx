import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
)
