import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Line, Doughnut, Radar } from 'react-chartjs-2';

class TransactionsChart extends Component {
    render(){
        const dataLine = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'UBS',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [6500, 5999, 8000, 4600, 12000, 5500, 9000]
              }
            ]
        };

        const dataRadar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                  label: '#1',
                  backgroundColor: 'rgba(245, 74, 85, 0.5)',
                  data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                  label: '#2',
                  backgroundColor: 'rgba(90, 173, 246, 0.5)',
                  data: [12, 42, 121, 56, 24, 12, 2]
                },
                {
                  label: '#3',
                  backgroundColor: 'rgba(245, 192, 50, 0.5)',
                  data: [2, 123, 154, 76, 54, 23, 5]
                }
              ]
        };
        return (
            <MDBRow className="mb-1">
                <MDBCol md="12" lg="12" className="mb-1">
                    <MDBCard className="mb-1">
                    <MDBCardHeader>
                    Transaction Volumes

                    </MDBCardHeader>
                    <MDBCardBody>
                        <Line data={dataLine} options={{responsive: true }} />
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }

}

export default TransactionsChart;
