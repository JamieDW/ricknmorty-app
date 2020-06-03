import Vue from "vue";

import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Install the Vue plugin
Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
