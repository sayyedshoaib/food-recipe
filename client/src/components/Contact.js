import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const Contact = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    const userContact = async (e) => {
        try {
            const res = await fetch('/getData', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })
            if (!res.status === 200) {
                throw new Error(res.error);
            }
        } catch (err) {
            console.log(err);
            history.push('/login')

        }
    }
    useEffect(() => {
        userContact();
        // eslint-disable-next-line
    }, [])

    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }



    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;
        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ name, email, phone, message })
        })
        const data = await res.json();
        console.log(data);

        if (!data) {
            // throw new Error(res.error);
            console.log("message not found");
        } else {
            alert("message send")
            setUserData({ ...userData, message: "" })
        }
    }


    return (
        <>
            <div className="contact_form ">
                <div className="container col-md-8 ">
                    <div className="row">
                        <div className="content_of_form col-lg-8 offset-lg-2">
                            <div className="contact_form_container">
                                Ask A Query
                              </div>
                            <form method="POST" id="contact_form justify-content-between">
                                <div className="contact_form_name ">
                                    <input type="text" id="contact_form_name" className="contact-form_name input_field"
                                        name="name"
                                        onChange={handleInputs}
                                        value={userData.name}
                                        placeholder="Your Name" required="true" />
                                    <input type="email" id="contact_form_email" className="contact-form_email input_field"
                                        name="email"
                                        onChange={handleInputs}
                                        value={userData.email}
                                        placeholder="Your Email" required="true" />
                                    <input type="number" id="contact_form_phone" className="contact-form_phone input_field"
                                        name="phone"
                                        onChange={handleInputs}
                                        value={userData.phone}
                                        placeholder="Your Phone Number" required="true" />
                                </div>
                                <div className="contact_form_text mt-5 ">
                                    <textarea className="text_field contact_form_message col-md-12 col-sm-12 py-2"
                                        name="message"
                                        onChange={handleInputs}
                                        value={userData.message}
                                        placeholder="Message For Us" cols="30" rows="8"></textarea>
                                </div>
                                <div className="contact_form_button mt-5">
                                <input type="submit" name='signin' id='signin' className='form-submit'
                                    onClick={contactForm} value='Send Message' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Contact;
