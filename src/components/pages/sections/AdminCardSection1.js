import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const AdminCardSection1 = () => {
  return (
    <div>
      <MDBRow className="mb-4">
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="businesshq-bg" />
              <div className="data">
                <p>BALANCE</p>
                <h4>
                  <strong>242,320 CHF</strong>
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
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="businesshq-bg" />
              <div className="data">
                <p>REVENUE</p>
                <h4>
                  <strong>18,000 CHF</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="23" className="progress-bar success-color-dark" role="progressbar"
                  style={{ width: '23%' }}></div>
              </div>
              <MDBCardText>Up from last week (23%)</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="receipt" className="businesshq-bg lighten-1" />
              <div className="data">
                <p>COSTS</p>
                <h4>
                  <strong>9,700</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar danger-color-dark" role="progressbar"
                  style={{ width: '28%' }}></div>
              </div>
              <MDBCardText>Up from last week (28%)</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
      <MDBRow className="mb-4">
      {/* <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="user" className="businesshq-bg" />
              <div className="data">
                <p>WEBSITE VISITORS</p>
                <h4>
                  <strong>2,324</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar success-color-dark" role="progressbar"
                  style={{ width: '25%' }}></div>
              </div>
              <MDBCardText>Better than last week (25%)</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
      </MDBRow>
    </div>
  )
}

export default AdminCardSection1;

