import React, {Component} from 'react';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,Row,
} from 'reactstrap';


class RegisterData extends Component{
    render(){
        return (
            <div className="mt-3">
                <Row>
                    <Col xs="3"/>
                    <Col>
                        <h2>Регистрирај се</h2>
                        <Form className="form" onSubmit={this.props.handleSignUp}>
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"/>
                                </FormGroup>
                            </Col>
                            <Button type="submit">Register</Button>
                        </Form>
                    </Col>
                    <Col xs="3"/>
                </Row>
            </div>
        );
    }
}

export default RegisterData;