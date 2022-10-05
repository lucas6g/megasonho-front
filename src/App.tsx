import React from 'react'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Register } from './pages/Register/Register'
import { WhatsConfirmation } from './pages/WhatsConfirmation/WhatsConfirmation'
import { LuckyNumber } from './pages/LuckyNumber/LuckyNumber'
import { Invites } from './pages/Invites/Invites'
import { Plans } from './pages/Plans/Plans'
import { Payment } from './pages/Payment/Payment'
import { PaymentConfirmation } from './pages/PaymentConfirmation/PaymentConfirmation'
import { ShareLink } from './pages/ShareLink/ShareLink'
import { Login } from './pages/Login/Login'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route
                path="/whats-confirmation"
                element={<WhatsConfirmation />}
              />
              <Route path="/lucky-number" element={<LuckyNumber />} />
              <Route path="/invites" element={<Invites />} />
              <Route path="/share-link" element={<ShareLink />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/payment" element={<Payment />} />
              <Route
                path="/payment-confirmation"
                element={<PaymentConfirmation />}
              />
            </Route>
          </Routes>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}

export default App
