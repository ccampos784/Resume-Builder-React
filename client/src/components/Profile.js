import React, {Component} from 'react';

import { Form, Row, Card } from 'react-bootstrap';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Profile(props) {
    
    return (
        <Card>
            <Card.Body>
            <Card.Title>
                Contact Information
            </Card.Title>            
                <Form.Group className="mb-3" controlId='firstname'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" required value = {props.parentState.firstname} onChange = {props.stateChanger}/>                   
                </Form.Group>

                <Form.Group className="mb-3" controlId='lastname'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" required value = {props.parentState.lastname} onChange = {props.stateChanger}/>                   
                </Form.Group> 

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" required value = {props.parentState.email} onChange = {props.stateChanger}/>                   
                </Form.Group>  

                <Form.Group className="mb-3" controlId='phone'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="(123) 456-7890" required value = {props.parentState.phone} onChange = {props.stateChanger}/>                   
                </Form.Group>   

                <Form.Group className="mb-3" controlId='github'>
                    <Form.Label>GitHub</Form.Label>
                    <Form.Control type="text" placeholder="https://" value = {props.parentState.github} onChange = {props.stateChanger}/>                   
                </Form.Group> 

                <Form.Group className="mb-3" controlId='linkedin'>
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control type="text" placeholder="https://" value = {props.parentState.linkedin} onChange = {props.stateChanger}/>                   
                </Form.Group>  

                <Form.Group className="mb-3" controlId='summary'>
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter text" value = {props.parentState.summary} onChange = {props.stateChanger}/>                   
                </Form.Group>                
            </Card.Body>
        </Card>
    );
  }
  
export default Profile;