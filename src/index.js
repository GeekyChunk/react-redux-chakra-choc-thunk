import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import Appbar from './components/appbar'
import Footer from './components/footer'
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.render(
  <Provider store={store}>
      <ChakraProvider>
        <Appbar />
        <Home />
        <Footer />
      </ChakraProvider>
  </Provider>,
  document.getElementById('root')
)
