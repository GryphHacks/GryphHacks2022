import { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [isEmpty, setEmpty] = useState(null);     // Email field is empty by default

    const handleSubscribe = (event) => {

        event.preventDefault();
        setEmpty(true)  // Reset state

        if (email) {
            // Email provided, attempt POST to mailchimp 
            setEmpty(false)
            onValidated({ MERGE0 : email });
        }
    }

    const trimMessage = (message) => {

        if (!message) {
            // I don't think this will ever happen but just in case??
            return null;
        }
        // Attempt to split the message at the dash
        const result = message.split('-');

        if ( "0" === result[0].trim() ) {
            // The message was prefixed by a zero, return the trimmed message
            return result[1]
        }
        // Otherwise no trimming to be done, return original msg
        return message;
    }

    const handleMessage = (message) => {

        if (isEmpty || message.includes('Please enter a value')) {
            // MailChimp API does not error handle blank field, on spaces "0 - Please enter a value"
            return 'Please enter a valid email address';

        } else if (message.includes('domain portion')) {
            // 0 - The domain portion of the email address is invalid (the portion after the @: .com)
            return 'The domain of the provided email address is invalid';

        } else if (message.includes('cannot be added') || message.includes('cannot be imported')) {
            // This email cannot be added to this list. Please enter a different email address.
            // admin@b.com is an invalid email address and cannot be imported.
            return 'The email provided is invalid and cannot be added to this list. Please try a different email address';

        } else {
            // Use the provided MailChimp message, but trim any leading spaces/zeroes
            // Too many subscribe attempts for this email address. Please try again in about 5 minutes.
            // admin@bb.com is already subscribed to list GryphHacks. Click here to update your profile
            // 0 - The username portion of the email address is empty
            // 0 - An email address must contain a single @ 
            // 0 - Enter a value less than 100 characters long
            return trimMessage(message);
        }
    }

    return (
        <>
            <h4>Sign up for our newsletter!</h4>
            <form onSubmit={(e) => handleSubscribe(e)}>
                <input 
                    placeholder="example@email.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <button label="subscribe" type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            
            {/* TODO - Add in MailChimp antispam fields at some point */}

            {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}

            {(status === "error" || isEmpty) && (
                <div 
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: handleMessage(message) }}
                />
            )}

            {status === "success" && (
                <div
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </>
    )
}

const NewsletterSignUp = () => {

    return (
        <div>
            <MailchimpSubscribe 
                url={process.env.REACT_APP_MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default NewsletterSignUp;
