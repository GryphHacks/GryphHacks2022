import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterSignUp from './NewsletterSignUp';

const MailchimpForm = () => {

    const postUrl = `https://socis.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div>
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <NewsletterSignUp
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default MailchimpForm;
