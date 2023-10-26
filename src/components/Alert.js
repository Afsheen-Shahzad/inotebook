/*
import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert
*/

import React from 'react'

export default function Alert(props) {

    const capitalize= (word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'60px'}} >
            {props.alert && <div>
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> :  {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}
