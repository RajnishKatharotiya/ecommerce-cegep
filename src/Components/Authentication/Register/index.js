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
import AlertDismissible from "../../shared/Alert";
import { useState } from "react";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

const Register = (props) => {
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
        <div className="register-container">
            <Header />
            <Card>
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Formik
                        validationSchema={schema}
                        onSubmit={submit}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            username: '',
                            password: '',
                            passwordConfirmation: '',
                            city: '',
                            state: '',
                            zip: '',
                            terms: false,
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            placeholder="Lastname"
                                            aria-describedby="inputGroupPrepend"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                            isInvalid={!!errors.firstName}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            placeholder="Lastname"
                                            aria-describedby="inputGroupPrepend"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                            isInvalid={!!errors.lastName}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
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
                                                isValid={touched.username && !errors.username}
                                                isInvalid={!!errors.username}
                                            />
                                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
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
                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="passwordConfirmation"
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                            isInvalid={!!errors.passwordConfirmation}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.passwordConfirmation}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            name="city"
                                            value={values.city}
                                            onChange={handleChange}
                                            isInvalid={!!errors.city}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="State"
                                            name="state"
                                            value={values.state}
                                            onChange={handleChange}
                                            isInvalid={!!errors.state}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.state}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationFormik05">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Zip"
                                            name="zip"
                                            value={values.zip}
                                            onChange={handleChange}
                                            isInvalid={!!errors.zip}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.zip}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        isInvalid={!!errors.terms}
                                        feedback={errors.terms}
                                        id="validationFormik0"
                                    />
                                </Form.Group>
                                <div className="register-footer">
                                    <Button variant="danger" type="submit">Submit</Button>
                                    <Card.Text><Link className="register_cna-link" to="/login">Already have an account?</Link></Card.Text>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
            <AlertDismissible open={show} onClose={setShow} text="User registered successfully !!" variant="success" />
        </div>
    )
}

export default Register;