import React from "react";

import Alert from 'react-bootstrap/Alert';

import './style.css';

function AlertDismissible({ heading, text, open, onClose, variant = "success" }) {
    if (open) {
        return (
            <Alert variant={variant} onClose={onClose ? () => onClose(false) : ''} dismissible className="alert-box">
                {heading && <Alert.Heading>{heading}</Alert.Heading>}
                {text && <p> {text} </p>}
            </Alert>
        )
    }
    return ''
}

export default AlertDismissible;