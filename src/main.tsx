import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from "./redux";
import App from './App'
import './index.css'


// npm i @apollo/client graphql
// npm install redux react-redux @types/react-redux
// npm install @reduxjs/toolkit @types/react-redux


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
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
