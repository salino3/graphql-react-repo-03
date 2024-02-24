import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'
import App from './App'
import './index.css'

// npm i @apollo/client graphql
// rd /s /q .git


const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:5000",
  }),
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>
  </React.StrictMode>,
)
