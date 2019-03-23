import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom'
import AddAccountModal from './AddAccountModal'

class InsightsSection extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    closeModal = () => {
        this.setState({
            modal: false
        });
    }
    render() {
        return (
            <MDBCard className="cascading-admin-card">
                <MDBCardBody className="px-1">
                    <div className="insights-card text-center ">
                        <h5>Live Insights</h5>
                        <hr />
                        <SingleInsight insightContent="Add bank account" onClickHandle={this.toggle} />
                        <SingleInsight insightContent={"Connect Google Analytics"} linkedPage={"/"} />
                    </div>
                </MDBCardBody>
                <AddAccountModal changeGlobalState={this.props.changeGlobalState} modalState={this.state.modal} closeModal={this.closeModal} />
            </MDBCard>
        );
    }
}

const SingleInsight = ({ insightContent, onClickHandle }) => {
    return (
        <div onClick={onClickHandle}>
            <div className="pt-2" >
                <div className="businesshq-bg-complementary py-4 px-3 text-white my-2 mx-3 rounded-lg"><div>{insightContent}</div></div>
            </div>
        </div>

    )
}
export default InsightsSection;