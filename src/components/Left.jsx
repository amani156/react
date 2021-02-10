import React from 'react'
import {Form} from 'react-bootstrap';
import { Button, Col} from "react-bootstrap";
const left = () => {
    return (
        <div>
            <Form style={{ marginTop:"20%", padding:"10%" , width:"80%"}}>
                
                    <Col>
                    <h3> Choose the reference</h3>
                        <Form.Control placeholder="reference" />
                    </Col>
                    <Col>
                    <h3> Choose the color</h3>
                        <Form.Control placeholder="color" />
                    </Col>
                    <Col>
                    <h3> Choose the height</h3>
                        <Form.Control placeholder="height" />
                    </Col>
                    <Col>
                    <h3> Choose the width</h3>
                        <Form.Control placeholder="width" />
                    </Col>
                    <Button variant="primary" type="submit" style ={{margin:"20%"}}>
                     Submit
                    </Button>
            </Form>
        </div>
    )
}

export default left
