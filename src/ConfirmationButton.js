import React from 'react'

const ConfirmationButton = (props) => {
    return (
        <div>
            <button onClick={() => props.handle(total, newValue)}>Confirm order</button>
        </div>
    )
}

export default ConfirmationButton
