import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon , MDBCardHeader} from 'mdbreact';
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



const dataDoughnut = {
    labels: ["UBS"],
    datasets: [{
        data: [300],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  }

const AccountPage = (props) => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol className="col-9">
        <MDBRow>
        <MDBCol>
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="money-bill-alt" className="businesshq-bg" />
            <div className="data">
              <p>UBS</p>
              <h4>
                <strong>{props.globalState.balances.reduce((prev, curr) => prev + curr) + " CHF"} </strong>
              </h4>
            </div>
          </div>
                      <MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="14" className="progress-bar success-color-dark" role="progressbar"
                style={{ width: '14%' }}></div>
            </div>
            <MDBCardText>Up from last week (14%)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol className="col-6">
      <MDBCard className="mt-4">
      <MDBCardHeader>Doughnut chart</MDBCardHeader>
      <MDBCardBody >
          <Doughnut data={dataDoughnut}  height={180} options={{responsive: true }} />
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>


        </MDBCol>
        <MDBCol className="col-3">
          <InsightsSection changeGlobalState={props.changeGlobalState} />
        </MDBCol>
      </MDBRow>


    </React.Fragment>
  )
}

export default AccountPage;
