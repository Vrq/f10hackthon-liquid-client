import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import './App.css';

class App extends Component {
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
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="py-5 px-3">
            <Routes globalState={this.state} changeGlobalState={this.changeGlobalState} />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
