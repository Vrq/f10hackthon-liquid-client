import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'

const InsightsSection = () => {
    return (
        <MDBCard className="cascading-admin-card">
            <MDBCardBody className="px-1">
                <div className="insights-card text-center ">
                    <h5>Live Insights</h5>
                    <hr />
                    <SingleInsight insightContent="Add bank account" linkedPage={"/accountsPage"} />
                    <SingleInsight insightContent={"Connect Google Analytics"} linkedPage={"/"}/>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

const SingleInsight = ({ insightContent, linkedPage }) => {
    return (
        <Link to={linkedPage}>
            <div className="pt-2">
                <div className="businesshq-bg-complementary py-4 px-3 text-white my-2 mx-3 rounded-lg"><div>{insightContent}</div></div>
            </div>
        </Link>

    )
}
export default InsightsSection;