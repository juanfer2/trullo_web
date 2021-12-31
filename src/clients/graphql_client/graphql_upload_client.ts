import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const link: any = createUploadLink({ uri: 'http://localhost:4000/graphql' });

const GraphqlUploadClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default GraphqlUploadClient;
