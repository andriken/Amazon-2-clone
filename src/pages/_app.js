import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'


//remember the Component and pageProps Is passed by Next.js because It uses this specific component...
// throughout your app which are the ones you create 
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        {/* this Component below will be the actuall content pages of our app. */}
        <Component {...pageProps} />
      </SessionProvider> 
    </Provider>
  )
}

export default MyApp