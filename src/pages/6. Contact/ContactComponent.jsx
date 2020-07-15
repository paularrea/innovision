import React from 'react'

function ContactComponent(props) {
    return (
        <div ref={props.ContactRef} className='bg-dark page'>
            Contact
        </div>
    )
}

export default ContactComponent
