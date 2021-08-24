import Header from "../../shared/Header";
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import './style.css';
import { useState } from "react";
import AlertDismissible from "../../shared/Alert";

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

const Login = (props) => {
    const [show, setShow] = useState(false);
    const submit = (values) => {
        setShow(true);
        localStorage.setItem('username', values.username);

        setTimeout(() => {
            setShow(false);
            props.history.push('/recipes')
        }, 1000)
    }

    return (
        <div className="login-container">
            <Header />
            <Card>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Formik
                        validationSchema={schema}
                        onSubmit={submit}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                isInvalid={!!errors.username}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationFormik03">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={!!errors.password}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <div className="login-footer">
                                    <Button variant="danger" type="submit">Login</Button>
                                    <Card.Text><Link className="login_cna-link" to="/register">Create new account</Link></Card.Text>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
            <AlertDismissible open={show} onClose={setShow} text="User logged in successfully !!" variant="success" />
        </div>
    )
}

export default Login;