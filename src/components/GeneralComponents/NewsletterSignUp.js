import React from 'react';
import { useState } from 'react';

const NewsletterSignUp = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const newsletterSignUp = (event) => {
        event.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({ MERGE0: email });
        // console.log(onValidated)
    }

    return (
        <>
            <h3>Sign up for our newsletter!</h3>
            <form onSubmit={(e) => newsletterSignUp(e)}>
                <input 
                    type="email"
                    placeholder="example@email.com"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button label="subscribe" type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p>{ status, message }</p>

            {/* Mailchimp anti spam forms -- prevents bot sign ups */}
        </>
    )
    // {status === "sending" && <p>Brrrr sending...</p>}
    // {status === "error" && <p>{message}</p>}
    // {status === "success" && <p style={{ color: "green" }}>Subscribed !</p>}
}

export default NewsletterSignUp;