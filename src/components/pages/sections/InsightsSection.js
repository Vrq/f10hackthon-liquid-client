import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon, MDBAnimation, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'
import AddAccountModal from './AddAccountModal'

class InsightsSection extends Component {
    state = {
        modal: false,
        showInitialInsight: false,
        showSecondInsight: false
    };

    toggle = (accountNumber) => {
        if(accountNumber === 1) {
            this.setState({
                accountNumber: accountNumber,
                modal: !this.state.modal,
                showInitialInsight: false
            });
            setTimeout(()=> this.setState({showSecondInsight: true}), 5000)
        }
        if(accountNumber === 2) {
            this.setState({
                accountNumber: accountNumber,
                modal: !this.state.modal,
                showSecondInsight: false
            });
            setTimeout(()=> this.setState({showThirdInsight: true}), 5000)
            setTimeout(()=> this.setState({showFourthInsight: true}), 9000)
        }
        
    }

    componentDidMount = () => {
        let myVar = setTimeout(()=> this.setState({showInitialInsight: true}), 2000)
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
                        {this.state.showInitialInsight && <SingleInsight insightContent="Add bank account" onClickHandle={() => this.toggle(1)} />}
                        {this.state.showSecondInsight && <SingleInsight insightContent="Do you have another account?" onClickHandle={() => this.toggle(2)}/>}
                        {this.state.showThirdInsight && <SingleInsight insightContent={"Your cashflows indicate that your balance will be >300.000 CHF by the end of 2019"} linkedPage={"/"} />}
                        {this.state.showFourthInsight && <SingleInsight insightContent={"Connect Google Analytics"} linkedPage={"/"} />}
                    </div>
                </MDBCardBody>
                <AddAccountModal changeGlobalState={this.props.changeGlobalState} modalState={this.state.modal} closeModal={this.closeModal} accountNumber={this.state.accountNumber} />
            </MDBCard>
        );
    }
}

const SingleInsight = ({ insightContent, onClickHandle }) => {
    return (
        <MDBAnimation type="slideInUp">
            <div onClick={onClickHandle} >
                <div className="pt-2" >
                    <div className="businesshq-bg-complementary py-4 px-3 text-white my-2 mx-3 rounded-lg z-depth-1-half show-pointer"><div>{insightContent}</div></div>
                </div>
            </div>
        </MDBAnimation>

    )
}
export default InsightsSection;