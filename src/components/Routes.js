import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import trxPage from './pages/trxPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: [5555, 340000],
      revenues: [],
      costs: []
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <DashboardPage globalState={this.state} />} />
        <Route exact path="/dashboard" render={(props) => <DashboardPage globalState={this.state} />} />
        <Route path='/trxPage' component={trxPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
