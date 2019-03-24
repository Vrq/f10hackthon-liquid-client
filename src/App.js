import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon, MDBCardTitle } from 'mdbreact';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import InsightsSection from './components/pages/sections/InsightsSection'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: [0],
      revenues: [0],
      costs: [0],
      banks: [],
      accountShares: [100],
      showWelcomeMessage: true
    };
  }

  changeGlobalState = (newState) => {
    this.setState(prevState => ({
      balances: newState.balances ? newState.balances : prevState.balances,
      revenues: newState.revenues ? newState.revenues : prevState.revenues,
      costs: newState.costs ? newState.costs : prevState.costs,
      banks: newState.banks ? newState.banks : prevState.banks,
      accountShares: newState.accountShares ? newState.accountShares : prevState.accountShares,
      showWelcomeMessage: false
    }))
  }

  closeWelcomeMessage = () => {
    this.setState({
      showWelcomeMessage: false
    })
  }
  render() {
    return (
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="py-5 px-3">
          <MDBRow>
            <MDBCol className="col-9">
            <div className="d-flex justify-content-center">
              {this.state.showWelcomeMessage &&
                <MDBCol className="col-6 text-center" onClick={this.closeWelcomeMessage}>
                  <MDBCard className="p-5 white-text businesshq-bg">
                    <MDBCardTitle className="text-center ">Welcome to LiquiNET</MDBCardTitle>
                    <MDBCardBody><MDBCardText className="text-center white-text">Our intelligent insights will help you get started</MDBCardText></MDBCardBody>
                  </MDBCard>
                </MDBCol>
              }
              </div>
              <Routes globalState={this.state} changeGlobalState={this.changeGlobalState} />
              {/* <ChartSection1 />
          <TableSection />
          <ChartSection2 /> */}
            </MDBCol>
            <MDBCol className="col-3">
              <InsightsSection changeGlobalState={this.changeGlobalState} />
            </MDBCol>
          </MDBRow>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
