import { GlobalStyle } from '../styles/Global'

import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0099ff',
    secondary: '#1c5480',
    white: '#fffdfd',
    black:'#202020',
    lightGray:'#525253',
  },
 
}

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
