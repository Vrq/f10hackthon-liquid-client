import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import TransactionsChart from './sections/TransactionsChart';
import UBS_logo from '../../assets/UBS_logo_logotype_emblem.png'
import CS_logo from '../../assets/CS_logo.png'
import PF_logo from '../../assets/PF_logo.png'
import RV_logo from '../../assets/Logo_Revolut.png'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import InsightsSection from './sections/InsightsSection'
import AddAccountModal from './sections/AddAccountModal';


const TrxTable = () => {
  return (
    <MDBCard className="mt-5">
      <MDBView className="gradient-card-header blue darken-2">
        <h4 className="h4-responsive text-white">Transactions</h4>
      </MDBView>
      <MDBCardBody>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Bank</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>23.03.2019</td>
              <td><img height={30} src={UBS_logo} /></td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>23.03.2019</td>
              <td><img height={30} src={UBS_logo} /></td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>23.03.2019</td>
              <td><img height={30} src={UBS_logo} /></td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>

  )
}


class TrxPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.props.changeGlobalState({
      balances: [13000],
      revenues: [300, 3500],
      costs: [300, 1000]
    })
    this.setState({
      modal: !this.state.modal
    });
  }

  closeModal = () => {
    this.setState({
      modal: false
    });
  }

  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="12">
            <TransactionsChart />
            <TrxTable />
          </MDBCol>
          {/* <MDBCol md="3">
            <InsightsSection changeGlobalState={this.props.changeGlobalState} />
          </MDBCol> */}
        </MDBRow>
        <AddAccountModal changeGlobalState={this.props.changeGlobalState} modalState={this.state.modal} closeModal={this.closeModal} />
      </div>
    );
  }
}
export default TrxPage;
