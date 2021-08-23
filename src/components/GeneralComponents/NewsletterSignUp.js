import { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubscribe = (event) => {
        event.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({ MERGE0 : email });
        console.log(onValidated)
    }

    return (
        <>
            <h3>Sign up for our newsletter!</h3>
            <form onSubmit={(e) => handleSubscribe(e)}>
                <input 
                    type="email"
                    placeholder="example@email.com"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button label="subscribe" type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            
            {/* TODO - Add in MailChimp antispam fields at some point */}

            {/* {status === "sending" && <p>Brrrr sending...</p>}
            {status === "error" && <p>{message}</p>}
            {status === "success" && <p style={{ color: "green" }}>Subscribed !</p>} */}
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