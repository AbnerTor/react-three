
import React, { useState } from 'react';

const Contact = () => {
    // use state for form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && email !== '' && checkEmail(email) && message !== '') {
            const sampleFormDataSend = {
                name, email, message
            };

            console.log(sampleFormDataSend);

            setName('');
            setEmail('');
            setMessage('');
        }
    }

    const checkEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const renderError = () => {
        if (name === '') {
            return '';
        }

        if (email === '' || !checkEmail(email)) {
            return 'Please enter a valid email.';
        }

        if (message === '') {
            return 'Enter Message';
        }
    }

    return (
        <div className="bg-gray-800 h-96 text-white" id="contact">

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

                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center">
                            <small id="emailHelp" className="form-text text-muted text-black">{renderError()}</small>
                        </div>
                        <button
                            type="submit"
                            className="flex mt-5 mb-10 bg-white rounded text-black w-1/4 justify-center "
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;