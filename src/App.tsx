import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './context/CartContext'
import { CheckoutContextProvider } from './context/CheckoutContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
