import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

function Provider({ children }) {

  const httpLink = createHttpLink({ uri: 'http://localhost:4500/graphql'});
  const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
    const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
  return (
      <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}

export default Provider