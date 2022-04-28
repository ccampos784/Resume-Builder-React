import React, {Component} from 'react';

import { Form, Card } from 'react-bootstrap';

function SingleExperience(props) {

    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title>Experience</Card.Title>
                <Form.Group className="mb-3" controlId={'employer_name'}>
                    <Form.Label>Employer Name</Form.Label>
                    <Form.Control type="text" placeholder="Employer Name" required value = {props.employer_name} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>
                <Form.Group className="mb-3" controlId={'employer_title'}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Your title" required value = {props.employer_title} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group> 
                <Form.Group className="mb-3" controlId={'employer_start'}>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" required value = {props.employer_start} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>  
                <Form.Group className="mb-3" controlId={'employer_end'}>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="End Date" required value = {props.employer_end} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>  
                <Form.Group className="mb-3" controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="2019" value = {props.description} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>                
            </Card.Body>
        </Card>
    );
  }
  
export default SingleExperience;