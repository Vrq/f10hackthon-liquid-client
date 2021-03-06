import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import InsightsSection from './sections/InsightsSection';

const DashboardPage = (props) => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol className="col-12">
          <AdminCardSection1 globalState={props.globalState} />
          {/* <ChartSection1 />
          <TableSection />
          <ChartSection2 /> */}
        </MDBCol>
        {/* <MDBCol className="col-3">
      <InsightsSection  changeGlobalState={props.changeGlobalState}/>
        </MDBCol> */}
      </MDBRow>

    </React.Fragment>
  )
}

export default DashboardPage;