import '../styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import themeReducer from '../features/theme'

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
