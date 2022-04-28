import React, {Component} from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

import SingleExperience from "./SingleExperience";

function Experience(props) {
    let idx = 0;

    return (
        <div className='step'>
            {
                props.parentState.experiences.map((experience) => 
                    <SingleExperience key = {experience} {...experience} index = {idx++} stateChanger = {props.singleUpdater}/>
                )
            }

            <Row className='mt-3 mb-3'>
                <Col>
                    <Button variant="success" onClick={() => addExperience(props)}>Add Experience</Button>                                      
                </Col>
            </Row>                                               
        </div>
    );
}

function addExperience(props) {
    props.stateChanger(
        [...props.parentState.experiences, 
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


  
export default Experience;