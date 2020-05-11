import * as React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './pages/Form';
import Listing from './pages/Listing';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/setup/:id">
            <Form />
          </Route>
          <Route path="/">
            <Listing />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
