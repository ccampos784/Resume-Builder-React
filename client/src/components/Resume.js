import React, { useState } from 'react';
import { Steps, useSteps  } from "react-step-builder";
import { Button, ButtonGroup, Form, Row, Col, ProgressBar } from 'react-bootstrap';

import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Summary from "./Summary";

function Resume() {
    const [info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        summary: '',
        educations: [],
        experiences: []
    });

    const [validated, setValidated] = useState(false);

    const formRef = React.createRef();

    const { prev, next, jump, total, current, progress } = useSteps();

    const validateForm = () => {
        const form = formRef.current;

        if (form.checkValidity() === true) {
            next();
            setValidated(false);
        } else {
            setValidated(true);
        }

      };    

    const handleChange = (e) => {
        setInfo({...info, [e.target.id] : e.target.value});
    }

    const updateExperienceArr = (arr) => {
        setInfo({...info, experiences : arr});
    }

    function updateSingleExperience(e, index) {
        const copyExperiences = [...info.experiences];
    
        copyExperiences[index][e.target.id] = e.target.value;
    
        updateExperienceArr(
            copyExperiences
        )
    }    

    const updateEducationArr = (arr) => {
        setInfo({...info, educations : arr});
    }   
    
    function updateSingleEducation(e, index) {
        const copyEducations = [...info.educations];
    
        copyEducations[index][e.target.id] = e.target.value;
    
        updateEducationArr(
            copyEducations
        )
    }      



    return (
        <div>
            <div className='mt-3 mb-3'>
                <Form noValidate validated={validated} ref={formRef}>
                    <Steps>
                        <Profile parentState = {info} stateChanger = {handleChange}/>
                        <Education parentState = {info} stateChanger = {updateEducationArr} singleUpdater = {updateSingleEducation}/>
                        <Experience parentState = {info} stateChanger = {updateExperienceArr} singleUpdater = {updateSingleExperience}/>
                        <Summary parentState = {info}/>
                    </Steps> 
                </Form>
            </div>
            <Row>
                <Col className="navigation">
                    <ButtonGroup>
                        <Button onClick={prev}>Prev</Button>
                        <Button onClick={validateForm}>Next</Button>
                    </ButtonGroup>
                </Col>                
            </Row>
            <Row className='mt-3'>
                <Col className="steps_data">
                    <ProgressBar now={progress * 100} label={`${progress * 100}%`} />
                </Col>
            </Row>
        </div>
    );
}

export default Resume;