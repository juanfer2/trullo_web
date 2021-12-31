import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink: any = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return { headers: { ...headers, authorization: token ? `${token}` : "" } }
});

const GraphqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ addTypename: false }),
});

export default GraphqlClient
