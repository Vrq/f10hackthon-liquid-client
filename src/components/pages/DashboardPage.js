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

const DashboardPage = () => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol className="col-9">
          <AdminCardSection1 />
          <ChartSection1 />
          <TableSection />
          <ChartSection2 />
        </MDBCol>
        <MDBCol className="col-3">
        <MDBCard className="cascading-admin-card">
            <MDBCardBody className="px-1">
            <div className="insights-card">
              <div className="text-center pt-3">
                <h5>Live Insights</h5>
                <hr/>
                <div className="businesshq-bg-light py-4 px-3 text-white m-2 rounded-lg"><small>23.03.2019: Connect your Google Analytics</small></div>
              </div>
            </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </React.Fragment>
  )
}

export default DashboardPage;