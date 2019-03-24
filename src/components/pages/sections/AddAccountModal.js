import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import CS_logo from '../../../assets/CS_logo.png'
import UBS_logo from '../../../assets/ubs-logo.png'
import PF_logo from '../../../assets/PF_logo.png'
import RV_logo from '../../../assets/Logo_Revolut.png'

class AddAccountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedAccount: 0
        };
      }

    toggle = () => {
        if(this.props.accountNumber !== 2) {
            this.props.changeGlobalState({
                balances: [13000],
                revenues: [300, 3500],
                costs: [300, 1000],
                banks: ["UBS"],
                accountShares: [100]
            })
        } else {
            this.props.changeGlobalState({
                balances: [13000, 21000],
                revenues: [300, 3500, 2900, 11000],
                costs: [300, 1000, 3000, 7000],
                banks: ["UBS", "Credit Suisse"],
                accountShares: [35, 75]
            })
        }
       
        this.props.closeModal()
        this.setState({
            selectedAccount: 0
        })
    }

    selectAccount = accountNumber => {
        this.setState({
            selectedAccount: accountNumber
        })
    }

    isHighlightedClass = thisAccountNumber => {
        if(this.state.selectedAccount === thisAccountNumber) {
            return "selected-account w-100"
        } else {
            return "w-100"
        }
    }
    render() {
        return (
            <React.Fragment>
                <MDBModal isOpen={this.props.modalState} toggle={this.toggle}    >
                    <MDBModalHeader toggle={this.toggle}><small>ADD BANK ACCOUNT</small></MDBModalHeader>
                    <MDBModalBody className="mr-2">
                        <div className="text-center pb-2">Choose your bank:</div>
                    <MDBRow>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(1)} onClick={() => this.selectAccount(1)}><img height={25} src={CS_logo} /></MDBBtn>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(2)}  onClick={() => this.selectAccount(2)}><img height={25} src={UBS_logo} /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(3)}  onClick={() => this.selectAccount(3)}><img height={30} src={RV_logo} /></MDBBtn>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(4)}  onClick={() => this.selectAccount(4)}><img height={25} src={CS_logo} /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(5)}  onClick={() => this.selectAccount(5)}><img height={30} src={PF_logo} /></MDBBtn>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBBtn color="white" className={this.isHighlightedClass(6)}  onClick={() => this.selectAccount(6)}><img height={25} src={CS_logo} /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.toggle}>Add account</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </React.Fragment>
        )
    }
}

export default AddAccountModal;