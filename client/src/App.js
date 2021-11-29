import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import ServicePost from './pages/ServicePost';
import OfferService from './pages/OfferService';
import FindService from './pages/FindService';
import NotFound from './pages/NotFound';
import "./App.css";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext ({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
    },
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  
  

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
        <header className="center">
          <h1 >
            <img src={require("./assets/gotchu-logo.png").default} alt="pp" style={{maxWidth:"10%"}}/>
            <p style={{fontSize:"3rem"}}>IGotcha!</p>
          </h1>
        </header>
          <Switch>
            <Route exact path="/signup">
              <SignUp/>
            </Route>
            <Route exact path="/profile">
              <UserProfile/>
            </Route>
            <Route exact path="/edit-profile">
              <EditProfile/>
            </Route>
            <Route exact path="/service-post">
              <ServicePost/>
            </Route>
            <Route exact path="/offer-service">
              <OfferService/>
            </Route>
            <Route exact path="/find-service">
              <FindService/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <footer className="">
            <p> {new Date().getFullYear()} - IGotcha!</p>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

