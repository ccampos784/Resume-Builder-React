import React, {Component} from 'react';

import { Form, Card } from 'react-bootstrap';

function SingleEducation(props) {
    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title>Education</Card.Title>
                <Form.Group className="mb-3" controlId='school_name'>
                    <Form.Label>School Name</Form.Label>
                    <Form.Control type="text" placeholder="NJIT" required value = {props.school_name} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>

                <Form.Group className="mb-3" controlId='school_degree'>
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type="text" placeholder="B.S. Computer Science" required value = {props.school_degree} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>

                <Form.Group className="mb-3" controlId='school_grad_year'>
                    <Form.Label>Graduation Year</Form.Label>
                    <Form.Control type="text" placeholder="2019" required value = {props.school_grad_year} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>

                <Form.Group className="mb-3" controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="2019" value = {props.description} onChange = {(e) => props.stateChanger(e, props.index)}/>                   
                </Form.Group>                
            </Card.Body>
        </Card>
    );
  }
  
export default SingleEducation;