import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <header>
          <h1 className="center">
            <img src={require("./assets/gotchu-logo.png").default} alt="pp" style={{maxWidth:"10%"}}/>
            IGotcha!
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
          <footer className="full-width home-columns">
            <p>license</p>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

