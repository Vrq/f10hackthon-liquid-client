import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact';

const InsightsSection = () => {
    return (
        <MDBCard className="cascading-admin-card">
            <MDBCardBody className="px-1">
                <div className="insights-card">
                    <div className="text-center pt-3">
                        <h5>Live Insights</h5>
                        <hr />
                        <div className="businesshq-bg-light py-4 px-3 text-white m-2 rounded-lg"><small>23.03.2019: Connect your Google Analytics</small></div>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default InsightsSection;