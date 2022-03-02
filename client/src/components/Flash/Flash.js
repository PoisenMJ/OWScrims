import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Event from '../../util/events';
import './Flash.css';

const FlashComponent = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');

    useEffect(() => {
        let isMounted = true;
        Event.addListener('flash', ({message_, variant_}) => {
            if(isMounted){
                setShow(true);
                setMessage(message_);
                setVariant(variant_);
                setTimeout(() => {
                    setShow(false);
                }, 3000);
            }
        });
        return () => { isMounted = false; }
    }, []);

    const handleClose = () => setShow(false);

    return (
        <div className="flash">
            {show &&
                <Alert className="flash-alert" variant={variant} onClose={handleClose} dismissible>
                    {message}
                </Alert>
            }
        </div>
    )
}

const Flash = (message_, variant_) => Event.emit('flash', ({message_, variant_}));

export default FlashComponent;
export { Flash };