// import React from 'react';


// const ContactMe = () => {

//     return (
//         <>
//         <div>
//             <h1>
//                 You can contact me through these methods listed below, email is preferred but, I usually reply on any of these platforms
//             </h1>
//         </div>
//         </>
//     )
// }

// export default ContactMe;

  
import React, { useState } from 'react';

const Contact = () => {
    // use state for form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // function for handling submitting form, simulate sending data
    const onSubmit = (e) => {
        e.preventDefault();

        // make sure form is properly filled out before allowing form to "send"
        if(name !== '' && email !== '' && checkEmail(email) && message !== '') {
            const sampleFormDataSend = {
                name, email, message
            };

            // "send" data
            console.log(sampleFormDataSend);

            // reset form
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    // check if email address is valid
    const checkEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const renderError = () => {
        if(name === '') {
            return '';
        }

        if(email === '' || !checkEmail(email)) {
            return 'Please enter a valid email.';
        }

        if(message === '') {
            return 'Enter Message';
        }
    }

    return (
    <div className="bg-blue-400 h-96" id="contact">

        <div className="w-1/3 mx-20 mt-10">
            <form className="flex flex-col">

            <div className="flex flex-col justify-center mb-4">
                <label htmlFor="name">Name</label>
                <input 
                    type="name" 
                    className="form-control rounded" 
                    id="name" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col justify-center mb-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    className="rounded" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col justify-center mb-4">
                <label htmlFor="message">Message</label>
                <textarea 
                    className="rounded" 
                    id="message" 
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div className="flex flex-col justify center">
                <small id="emailHelp" className="form-text text-muted">{renderError()}</small>
            </div>
            <button 
                type="submit" 
                className="mt-5 mb-10 bg-white rounded"
                onClick={onSubmit}
            >
            Submit
            </button>
            </form>
        </div>
    </div>
    );
}

export default Contact;