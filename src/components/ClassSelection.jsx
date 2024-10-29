import React, { useEffect, useState, useRef, useContext } from 'react';
import { Row, Col, Pagination, Container, Button, Form } from "react-bootstrap";

function ClassSelection(){
    const [classOne, setClassOne] = useState("");
    const [classTwo, setClassTwo] = useState("");
    const [classThree, setClassThree] = useState("");
    const [classFour, setClassFour] = useState("");

    return(
        <>
            <h1>Please enter your class names into the boxes!</h1>
            <Container>
                <Form onSubmit={handleClasses}>
                    <Form.Label htmlFor='ClassOne'>Class One</Form.Label>
                    <Form.Control
                        id='ClassOne'
                        value={classOne}
                        onChange={(e) => setClassOne(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Label htmlFor='ClassTwo'>Class Two</Form.Label>
                    <Form.Control
                        id='ClassTwo'
                        value={classTwo}
                        onChange={(e) => setClassTwo(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Label htmlFor='ClassThree'>Class Three</Form.Label>
                    <Form.Control
                        id='ClassThree'
                        value={classThree}
                        onChange={(e) => setClassThree(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Label htmlFor='ClassFour'>Class Four</Form.Label>
                    <Form.Control
                        id='ClassFour'
                        value={classFour}
                        onChange={(e) => setClassFour(e.target.value)}
                    >
                    </Form.Control>
                    
                </Form>
            </Container>
        </>
    )
}

export default ClassSelection;