import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import emailjs, { init } from 'emailjs-com';
init("4FwYArU-4yku_XkHn");

function handleSubmit() {
    let check  = false
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;

    // console.log(name, email, message, subject)

    const templateParams = {
        name: name,
        email: email,
        message: message,
        subject: subject,
    }
    emailjs.send('service_v85di8m', 'template_rstbx99', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    if(name === '' || email === '' || message === '' || subject === ''){
        check = false
    }else {
        alert('Submit form success!')
        check = true
    }
    return check;
}
const Contact = () => {


    const defaultMap = {
        center: {
            lat: 16.051101,
            lng: 108.205573
        },
        zoom: 11
    };

    return (
        <div  className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center ml-50 mr-50 mb-75 animate" data-animate="slideInLeft 1s">
                            <span className="border-left-1"/>
                            <span>contact us</span>
                            <span className="border-right-1"/>
                            <h1>Don't Hesitate To Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-bg animate" data-animate="slideInRight 1s">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="map-wrapper">
                                <div className="contact-map" style={{height: '390px', width: '100%'}}>
                                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', height: '390px'}}
                                         dangerouslySetInnerHTML={{
                                             __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.562895313222!2d108.21219811387873!3d16.03625388890127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ecaa2652df%3A0x78adfd59353a951!2zMTAxIEh14buzbmggVOG6pW4gUGjDoXQsIEhvw6AgQ8aw4budbmcgQuG6r2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1672975813767!5m2!1svi!2s"
                                              width="100%" height="100%" style="border:0;" 
                                              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                                         }}/>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="appointment-wrapper">

                                <form action="#" onSubmit={handleSubmit} id="appointment-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-box user-icon mb-30">
                                                <input required={true} id="username" type="text"
                                                       placeholder="Full Name Here"/>
                                                <span><i className="far fa-user"/></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box email-icon mb-30">
                                                <input required={true} id="email" type="email"  placeholder="Email Here"/>
                                                <span><i className="far fa-envelope"/></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box date-icon mb-30">
                                                <input required={true} id="subject" type="text"  placeholder="Subject"/>
                                                <span><i className="far fa-edit"/></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea required={true}  id="message" cols="30" rows="10"
                                                          placeholder="Write message"/>
                                                <span><i className="far fa-pencil-alt"/></span>
                                            </div>
                                            <div className="contact-btn">
                                                <button  className="btn"
                                                        ><span
                                                    className="btn-text">send message <i><FontAwesomeIcon
                                                    icon={['fas', 'long-arrow-alt-right']}/></i></span> <span
                                                    className="btn-border"/></button>

                                            </div>
                                        </div>
                                    </div>
                                </form>


                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;
