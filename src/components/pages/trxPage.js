import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import TransactionsChart from './sections/TransactionsChart';
import UBS_logo from '../../assets/UBS_logo_logotype_emblem.png'
import CS_logo from '../../assets/CS_logo.png'
import PF_logo from '../../assets/PF_logo.png'
import RV_logo from '../../assets/Logo_Revolut.png'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class TrxPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <MDBContainer>
      <TransactionsChart />
        <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">Transactions</h4>
              <MDBBtn color="info" onClick={this.toggle}>Add Account</MDBBtn>
            </MDBView>
            <MDBCardBody>
              <h3 className="mt-5 text-left"><strong>Striped rows.</strong></h3>
              <p>Use prop striped to add zebra-striping to any table row within the table body</p>
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
        </MDBCol>
      </MDBRow>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalHeader toggle={this.toggle}>Add bank accounts </MDBModalHeader>
          <MDBModalBody>
          Choose any of the banks below to add them to your overview
            <MDBRow>
              <MDBCol md="12">
                <MDBBtn color="white"><img height={25} src={CS_logo}/></MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                  <MDBBtn color="white"><img height={30} src={RV_logo}/></MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBBtn color="white"><img height={30} src={PF_logo}/></MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.toggle}>Add account</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default TrxPage;
