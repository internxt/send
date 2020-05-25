import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Send from './components/Send';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Send />} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;