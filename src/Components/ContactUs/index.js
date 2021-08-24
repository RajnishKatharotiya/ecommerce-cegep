import { useState } from "react";
import Header from '../shared/Header'

import { Formik } from 'formik';
import * as yup from 'yup';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';
import AlertDismissible from "../shared/Alert";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

const ContactUs = (props) => {
    const [show, setShow] = useState(false);
    const submit = (values) => {
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 3000)
    }

    return (
        <div className="contact-us-hero_container">
            <Header transparent={true} />
            <div className="contact-us-hero row">
                <div className="contact-us-hero_form-box col-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Ask a question</Card.Title>
                            <Formik
                                validationSchema={schema}
                                onSubmit={submit}
                                initialValues={{
                                    name: '',
                                    email: '',
                                    subject: '',
                                    message: '',
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
                                            <Form.Group as={Col} md="6" controlId="validationFormik01">
                                                <Form.Label>Your name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Jone Duo"
                                                    aria-describedby="inputGroupPrepend"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.name}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.name}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationFormik01">
                                                <Form.Label>Your Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="name@example.com"
                                                    aria-describedby="inputGroupPrepend"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationFormik01">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    aria-describedby="inputGroupPrepend"
                                                    value={values.subject}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.subject}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.subject}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationFormik01">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    type="text"
                                                    name="message"
                                                    placeholder="Enter a message"
                                                    aria-describedby="inputGroupPrepend"
                                                    value={values.message}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.message} />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.message}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <div className="contact-us-footer">
                                            <Button variant="danger" type="submit">Submit</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Card.Body>
                    </Card>
                </div>
                <div className="contact-us-hero_info-box col-4">
                    <ul className="list-unstyled mb-0">
                        <li><i className="bi bi-geo-alt-fill"></i>
                            <p>San Francisco, CA 94126, USA</p>
                        </li>

                        <li><i className="bi bi-telephone"></i>
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li><i className="bi bi-envelope-fill"></i>
                            <p>johnexample@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <AlertDismissible open={show} onClose={setShow} heading="Contact info saved successfully !!" text="We have received your contact details and message, and will give response as soon as possible." variant="success" />
        </div>
    )
}

export default ContactUs;