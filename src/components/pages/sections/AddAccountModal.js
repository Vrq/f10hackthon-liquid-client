import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import CS_logo from '../../../assets/CS_logo.png'
import PF_logo from '../../../assets/PF_logo.png'
import RV_logo from '../../../assets/Logo_Revolut.png'

class AddAccountModal extends Component {


    toggle = () => {
        this.props.changeGlobalState({
            balances: [13000],
            revenues: [300, 3500],
            costs: [300, 1000]
        })
        this.props.closeModal()
    }

    render() {
        return (
            <React.Fragment>
                <MDBModal isOpen={this.props.modalState} toggle={this.toggle}    >
                    <MDBModalHeader toggle={this.toggle}>Add bank accounts </MDBModalHeader>
                    <MDBModalBody>
                        Choose any of the banks below to add them to your overview
                    <MDBRow>
                            <MDBCol md="12">
                                <MDBBtn color="white"><img height={25} src={CS_logo} /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <MDBBtn color="white"><img height={30} src={RV_logo} /></MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <MDBBtn color="white"><img height={30} src={PF_logo} /></MDBBtn>
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