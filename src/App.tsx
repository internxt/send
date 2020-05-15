import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Share from './components/share/Share';
import NotFound from './components/notFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Share />} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;