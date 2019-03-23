import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TrxPage from './pages/trxPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import AccountsPage from './pages/AccountsPage';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: [0],
      revenues: [0],
      costs: [0]
    };
  }

  changeGlobalState = (newState) => {
    this.setState(prevState => ({
      balances: newState.balances ? newState.balances : prevState.balances,
      revenues: newState.revenues ? newState.revenues : prevState.revenues,
      costs: newState.costs ? newState.costs : prevState.costs
    }))
}
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <DashboardPage globalState={this.state} />} />
        <Route exact path="/dashboard" render={(props) => <DashboardPage globalState={this.state} />} />
        <Route exact path="/trxPage" render={(props) => <TrxPage globalState={this.state} changeGlobalState={this.changeGlobalState}/>} />
        <Route exact path="/accountsPage" render={(props) => <AccountsPage globalState={this.state} changeGlobalState={this.changeGlobalState}/>} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
