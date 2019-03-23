import React, { Component } from 'react';
import NavBarSection from './components/NavBarSection';
import DashboardPage from './pages/DashboardPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBarSection />
            <div>
              <Switch>
                <Route exact path="/" render={(props) => <DashboardPage />} />
                <Route exact path="/account-settings" render={(props) => <AccountSettingsPage />} />
                <Route component={<div>Not found 404</div>} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
