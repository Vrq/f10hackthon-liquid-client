import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact';

const InsightsSection = () => {
    return (
        <MDBCard className="cascading-admin-card">
            <MDBCardBody className="px-1">
                <div className="insights-card text-center ">
                    <h5>Live Insights</h5>
                    <hr />
                    <SingleInsight insightContent="Add bank account" />
                    <SingleInsight insightContent={"Connect Google Analytics"}/>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

const SingleInsight = ({insightContent}) => {
    return (
        <div className="pt-2">
            <div className="businesshq-bg-light py-4 px-3 text-white my-2 mx-3 rounded-lg"><small>{insightContent}</small></div>
        </div>
    )
}
export default InsightsSection;