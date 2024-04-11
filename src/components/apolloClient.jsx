// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://192.168.80.13:5000/graphql',
    }),
    cache: new InMemoryCache(),
});

export default client;
