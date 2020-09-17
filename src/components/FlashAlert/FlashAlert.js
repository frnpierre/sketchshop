import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";

const FlashAlert = (props) => {
    const [show, setShow] = useState(props.show)    
    
    if (show) {
        return (
            <Alert variant={props.flashType} onClose={() => setShow(false)} dismissible>
                <p>
                    {props.flashMsg}
                </p>
            </Alert>
        )
    } 
    return null
    
    
}

export default FlashAlert;