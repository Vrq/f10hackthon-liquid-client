import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import TrxPage from './pages/trxPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import AccountsPage from './pages/AccountsPage';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <DashboardPage globalState={this.props.globalState} changeGlobalState={this.props.changeGlobalState}/>} />
        <Route exact path="/dashboard" render={(props) => <DashboardPage globalState={this.props.globalState} changeGlobalState={this.props.changeGlobalState} />} />
        <Route exact path="/trxPage" render={(props) => <TrxPage globalState={this.props.globalState} changeGlobalState={this.props.changeGlobalState}/>} />
        <Route exact path="/accountsPage" render={(props) => <AccountsPage globalState={this.props.globalState} changeGlobalState={this.props.changeGlobalState}/>} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
