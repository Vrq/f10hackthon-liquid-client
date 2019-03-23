import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import TransactionsChart from './sections/TransactionsChart';
import UBS_logo from '/home/tobias/Dropbox/F10_Hackathon/Frontend/f10hackthon-liquid-client/src/assets/UBS_logo_logotype_emblem.png'
const TablesPage =  () => {
  return (
    <>
    <TransactionsChart />
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">Transactions</h4>
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
    </>
  )
}

export default TablesPage;
