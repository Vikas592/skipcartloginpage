import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function Provider({children}) {
    const client = new ApolloClient({
  uri: 'http://localhost:4500/graphql',
  cache: new InMemoryCache(),
});
  return (
      <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}

export default Provider