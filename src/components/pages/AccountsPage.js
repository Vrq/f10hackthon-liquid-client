import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon, MDBCardHeader } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import InsightsSection from './sections/InsightsSection';
import { Doughnut } from 'react-chartjs-2';





const AccountPage = (props) => {
  const dataDoughnut = {
    labels: props.globalState.banks[0] ? props.globalState.banks : [],
    datasets: [{
      data: props.globalState.accountShares,
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  }

  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol className="col-12">
          <MDBRow>
            <MDBCol>
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="money-bill-alt" className="businesshq-bg" />
                  <div className="data">
                    <p>TOTAL BALANCE</p>
                    <h4>
                      <strong>{props.globalState.balances.reduce((prev, curr) => prev + curr) + " CHF"} </strong>
                    </h4>
                  </div>
                </div>
                {props.globalState.balances[0] !== 0 &&

                  <MDBCardBody>
                    <div className="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="14" className="progress-bar success-color-dark" role="progressbar"
                        style={{ width: '14%' }}></div>
                    </div>
                    <MDBCardText>Up from last month (14%)</MDBCardText>
                  </MDBCardBody>
                }
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-6">
              {props.globalState.banks[0] &&
                <MDBCard className="mt-4">
                  <MDBCardHeader className="text-center">ACCOUNTS SHARE</MDBCardHeader>
                  <MDBCardBody >
                    <Doughnut data={dataDoughnut} height={180} options={{ responsive: true }} />
                  </MDBCardBody>
                </MDBCard>
              }
            </MDBCol>
          </MDBRow>


        </MDBCol>
        {/* <MDBCol className="col-3">
          <InsightsSection changeGlobalState={props.changeGlobalState} />
        </MDBCol> */}
      </MDBRow>


    </React.Fragment>
  )
}

export default AccountPage;
