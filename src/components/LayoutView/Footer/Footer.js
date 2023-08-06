import React, {useEffect} from 'react';
import FooterBottom from './FooterBottom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import emailjs, { init } from 'emailjs-com';
import Link from 'next/link';
init("4FwYArU-4yku_XkHn");

function handleSubmit() {
    let check  = false
    const email = document.getElementById('emailSub').value;
    console.log(email)
    const templateParams = {
        email: email,
    }
    emailjs.send('service_v85di8m', 'template_q17jj0d', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    if(email === ''){
        check = false
    }else {
        alert('Submit form success!')
        check = true
    }
    return check;
}
function scrollTop(){
  const offsetNeed =  document.getElementsByClassName('officeMain')[0].offsetTop;
  window.scrollTo({top: offsetNeed - 180, behavior: 'smooth'})
}


const Footer = (props) => {
    const { bgMode } = props;
    return (
        <footer>
            <div className={bgMode === 'dark' ? 'footer-active' : ''}>
                <div className="footer-area grey-bg pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="block1">
                                <div className="footer-wrapper mb-30">
                                    <div className="footer-logo">
                                        <a href="/">
                                           <img className="logo-light" src="/assets/img/sapota/logocty1-1.png" alt=""/>
                                           <img className="logo-dark" src="/assets/img/sapota/logo-light.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="footer-2-icon footer-4-icon">
                                        <a target="_blank" href="https://www.facebook.com/sapotacorp"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
                                        <a target="_blank" href="https://twitter.com/SapotaC"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
                                        <a target="_blank" href="https://www.linkedin.com/company/sapotacorp"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
                                        <a target="_blank" href="https://www.youtube.com/user/mBussiness"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title">Contact Us</h4>
                                    <div className="footer-info">
                                        <p>Don’t hesitate to contact me for any further assistance.</p>
                                    </div>
                                    <ul className="contact-link">
                                        <li>
                                            <a href="tel:(+84)383396560">
                                                <div className="contact-address-icon">
                                                    <i className="far fa-phone"/>
                                                </div>
                                                <div className="contact-address-text">
                                                    <h4>(+84) 38 339 6560</h4>
                                                </div>
                                            </a>

                                        </li>


                                        <li>
                                            <a href="mailto:michael@sapotacorp.vn">
                                                <div className="contact-address-icon">
                                                    <i className="far fa-envelope-open"/>
                                                </div>
                                                <div className="contact-address-text">
                                                    <h4>michael@sapotacorp.vn</h4>
                                                </div>
                                            </a>
                                        </li>


                                        {/*<li>*/}
                                        {/*    <a target="_blank" href="https://www.google.com/maps/place/150+Duy+T%C3%A2n,+H%C3%B2a+Thu%E1%BA%ADn+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0510617,108.203453,17z/data=!3m1!4b1!4m5!3m4!1s0x314219bbac6c009d:0x64deb5d551680e98!8m2!3d16.0510566!4d108.2056417?hl=vi-VN">*/}
                                        {/*        <div className="contact-address-icon">*/}
                                        {/*            <i className="far fa-map-marker-alt"/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="contact-address-text">*/}
                                        {/*            <h4>150 Duy Tan, Hai Chau, Da Nang</h4>*/}
                                        {/*        </div>*/}
                                        {/*    </a>*/}
                                        {/*</li>*/}

                                        {/*<li>*/}
                                        {/*    <a target="_blank" href="https://www.google.com/maps/place/295+P.+B%E1%BA%A1ch+Mai,+B%E1%BA%A1ch+Mai,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0022157,105.8487728,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac7498474be9:0x6e3313dc72212335!8m2!3d21.0022107!4d105.8509615">*/}
                                        {/*        <div className="contact-address-icon">*/}
                                        {/*            <i className="far fa-map-marker-alt"/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="contact-address-text">*/}
                                        {/*            <h4>295 Bach Mai, Hai Ba Trung, Ha Noi</h4>*/}
                                        {/*        </div>*/}
                                        {/*    </a>*/}
                                        {/*</li>*/}

                                        <li style={{cursor: 'pointer'}} onClick={scrollTop} className="view-all-our-offices light hidden-print">
                                            <a className="animation-btn-more" >
                                                View all our offices
                                            </a>
                                        </li>
                                        <li style={{cursor: 'pointer'}} onClick={scrollTop} className="view-all-our-offices dark hidden-print">
                                            <a className="animation-btn-more-dark" >
                                                View all our offices
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="block">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title">Our Services</h4>
                                    <div className="menu-our-services-container">
                                        <ul id="menu-our-services" className="menu">
                                            <li id="menu-item-88"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88">
                                               <Link href="/blockchain-development"> 
                                               <a >Blockchain Development</a>
                                               </Link>
                                            </li>
                                            <li id="menu-item-89"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-89">
                                                <Link href="/web-app-development"><a>Web App Development</a></Link>
                                                </li>
                                            <li id="menu-item-90"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-90">
                                                <Link href="/mobile-app-development"><a >Mobile App Development</a></Link>
                                                </li>
                                            <li id="menu-item-91"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91">
                                                <Link href="/customize-software"><a>Custom Software</a></Link>
                                                </li>
                                            <li id="menu-item-88"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88">
                                               <Link href="/IT-consultancy"> 
                                               <a >IT Consultancy</a>
                                               </Link>
                                            </li>
                                            <li id="menu-item-88"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88">
                                               <Link href="/QA-&-testing"> 
                                               <a >QA and Testing</a>
                                               </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="block">

                                <div className="subscribes-form">
                                    <form action="#" onSubmit={handleSubmit}>
                                        <div className="mc4wp-form-fields">
                                            <input id="emailSub" placeholder="Enter Your Email :" type="email"/>
                                            <button  className="btn" type="submit"><span
                                                className="btn-text">subscribe <i
                                                className="far fa-long-arrow-right"/></span> <span
                                                className="btn-border"/></button>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                    <FooterBottom/>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
