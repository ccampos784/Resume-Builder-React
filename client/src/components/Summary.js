import React, {Component} from 'react';

import { Form, Row, Button, Col, Card } from 'react-bootstrap';

function Summary(props) {
    
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Summary
                            </Card.Title>

                            <hr/>

                            <Card.Text>
                                <Row>
                                    <Col md="12" className='text-center'>
                                        <h2 class>{props.parentState.firstname + " " + props.parentState.lastname}</h2>
                                        <p class>{props.parentState.email + " - " + props.parentState.phone}</p>
                                    </Col>
                                </Row>

                                {
                                    props.parentState.summary.length > 0 &&
                                    <Row>
                                        <Col md="12" className='text-center'>
                                            <p>{props.parentState.summary}</p>
                                        </Col>
                                    </Row>
                                }                                

                                {
                                    props.parentState.experiences.length > 0 &&
                                    <Row>
                                        <Col md="12">
                                            <h4>Experience</h4>
                                        </Col>
                                    </Row>
                                }

                                {
                                    props.parentState.experiences.map((experience) =>
                                        <Row>
                                            <Col md="6">
                                                <p><b>{experience.employer_title}</b></p>
                                                <p>{experience.employer_name}</p>
                                            </Col>
                                            <Col md="6" style={{textAlign: 'right'}}>
                                                <p>{new Date(experience.employer_start).toLocaleDateString('en-us', { year:"numeric", month:"short"}) + " - " + new Date(experience.employer_end).toLocaleDateString('en-us', { year:"numeric", month:"short"})}</p>
                                            </Col>
                                            <Col md="12">
                                                <p>{experience.description}</p>
                                            </Col>                                                                                
                                        </Row> 
                                    )
                                } 


                                {
                                    props.parentState.educations.length > 0 &&
                                    <Row>
                                        <Col md="12">
                                            <h4 class>Education</h4>
                                        </Col>
                                    </Row>
                                }

                                {
                                    props.parentState.educations.map((education) =>
                                        <Row>
                                            <Col md="6">
                                                <p><b>{education.school_degree}</b></p>
                                                <p>{education.school_name}</p>
                                            </Col>
                                            <Col md="6" style={{textAlign: 'right'}}>
                                                <p>{education.school_grad_year}</p>
                                            </Col>
                                            <Col md="12">
                                                <p>{education.description}</p>
                                            </Col>                                          
                                        </Row> 
                                    )
                                }                                                        

                            </Card.Text>

                        </Card.Body>
                    </Card>            
                </Col>
            </Row>

            <Row className='mt-3 mb-3'>
                <Col>
                    <Button variant="success" onClick={() => generatePDF(props.parentState)}>Generate PDF</Button>                                      
                </Col>
            </Row>
        </div>         
    );
  }

function generatePDF(state) {
    console.log(state);
    fetch('http://localhost:4000/generatePDF', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(state)

    }).then((resp) => {
        return resp.blob();
    }).then((blob) => {
        let url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        /*let a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        a.target = '_blank';
        a.click();*/
    });
}
  
export default Summary;