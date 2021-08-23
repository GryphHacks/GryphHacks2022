import { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [status, ]

    const handleSubscribe = (event) => {
        event.preventDefault();
        setErrorMsg('')

        console.log("before validated: ", status, message)
        if (!email) {
            setErrorMsg('Please enter a valid email address.')
            return
        }
        // email &&
        // email.indexOf("@") > -1 &&
        onValidated({ MERGE0 : email });
        console.log("after validated: ", status, message)
        

        console.log(status, message)
        setErrorMsg('')
    }

    return (
        <>
            <h3>Sign up for our newsletter!</h3>
            <form onSubmit={(e) => handleSubscribe(e)}>
                <input 
                    // type="email"
                    placeholder="example@email.com"
                    onChange={e => setEmail(e.target.value)}
                    // required
                />
                <button label="subscribe" type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            
            {/* TODO - Add in MailChimp antispam fields at some point */}

            {status === "sending" ? <p>Sending...</p> : null}
            {status === "error" && <p style={{ color: "red" }}>{ errorMsg }</p>}
            {status === "success" && <p style={{ color: "green" }}>Successfully subscribed! :)</p>}
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