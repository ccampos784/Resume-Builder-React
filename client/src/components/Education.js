import React, {Component} from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

import SingleEducation from "./SingleEducation";


function Education(props) {
    let idx = 0;

    return (
        <div className='step'>
            {
                props.parentState.educations.map((education) => 
                    <SingleEducation key = {education} {...education} index = {idx++} stateChanger = {props.singleUpdater}/>
                )
            }

            <Row className='mt-3 mb-3'>
                <Col>
                    <Button variant="success" onClick={() => addEducation(props)}>Add Education</Button>                                      
                </Col>
            </Row>

        </div>
    );
}

function addEducation(props) {
    props.stateChanger(
        [...props.parentState.educations, 
            {
                employer_name: '',
                employer_title: '',
                employer_start_date: '',
                employer_end_date: '',
                description: ''       
            }        
        ]
    )
}

export default Education;
