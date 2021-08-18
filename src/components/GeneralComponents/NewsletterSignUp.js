import firebaseApp from '../../firebase';
import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterSignUp = () => {

    const [email, setEmail] = useState('');

    const newsletterSignUp = (event, email) => {

        event.preventDefault();

        firebaseApp.firestore().collection("MailingList").doc().set({ email })
        .then(() => {
            console.log("Email added to mailing list");
        })
        .catch(error => {
            console.log("Error writing to database: ", error);
        })

    }

    return (
        <>
            <p>Sign up for our newsletter!</p>
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </>
    )

    // return (
    //     <div>
    //         <form onSubmit={(e) => newsletterSignUp(e, email)}>
    //             <input 
    //                 type="email"
    //                 placeholder="example@email.com"
    //                 onChange={e => setEmail(e.target.value)}
    //                 required
    //             />
    //             <button type="submit" className="btn btn-primary">Sign Up</button>
    //         </form>
    //     </div>
    // )
}

export default NewsletterSignUp

// QuerySnapshot query = await FirebaseFirestore.instance.collection('users').where('email',isEqualTo:email).get();
// if (query.docs.length==0){
//    //Go to the sign up screen
// }
// else {
//    //Go to the login screen
// }