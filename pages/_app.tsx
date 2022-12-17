import NavigationAndFooter from '../src/components/NavigationAndFooter/NavigationAndFooter'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationAndFooter>
      <Component {...pageProps} />
    </NavigationAndFooter>
  )
}
