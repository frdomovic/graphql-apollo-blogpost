import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3001/api/graphql',
  cache: new InMemoryCache()
})

function MyApp ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} className='h-full w-full'>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
