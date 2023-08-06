import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionCustom from "../Elements/Accordion/AccordionCustom";
import VideoCustom from "../Home/VideoCustom";
import VideoSection from "../Home/VideoSection";
import Cta from "../Home/CtaSection";
import Team from "../Home/TeamSection";

class ServiceOneMain extends Component {

    render() {

        return (
            <main>
            {/* <!-- about-area-start --> */}
            <div className="about-area bg-white portfolio pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-6 mb-30">
                            <div className="single-about">
                                <div className="about-us-img">
                                    <img src="assets/img/about/03.jpeg" alt="" />
                                    <div className="about-us-2-img">
                                        <div className="about-inner-img about-2-inner">
                                            {/*<img src="assets/img/about/04.jpg" alt="" />*/}
                                            {/*<div className="about-video">*/}
                                            {/*    <a className="popup-video" href="https://www.youtube.com/watch?v=LTXD6XZXc3U"><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>*/}
                                            {/*</div>*/}
                                            <VideoCustom idVideo="MOOVDUfut2U"/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-6 mb-20">
                            <div className="faq-wrapper">
                                <div className="section-title mb-45">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">Portfolio 1</span>
                                    <h1>Multi vendor auction marketplace</h1>
                                    <p>.NET Core, Multi vendor auction marketplace, Sanapos payment gateway.
                                    </p>
                                </div>
                                <div className="faq-box">
                                    <AccordionCustom mode={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:'url(assets/img/bg/bg-16.jpg)'}} className="about-area portfolio activeBG pt-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-sm-6 mb-30">
                                <div className="single-about">
                                    <div className="about-us-img">
                                        <img src="assets/img/about/04.jpeg" alt=""/>
                                        <div className="about-us-2-img">
                                            <div className="about-inner-img about-2-inner">
                                                {/*<img src="assets/img/about/04.jpg" alt=""/>*/}
                                                {/*<div className="about-video">*/}
                                                {/*    <a className="popup-video"*/}
                                                {/*       href="https://www.youtube.com/watch?v=LTXD6XZXc3U"><i><FontAwesomeIcon*/}
                                                {/*        icon={['fas', 'play']}/></i></a>*/}
                                                {/*</div>*/}
                                                <VideoCustom idVideo="4iuJTkjdYSk"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-6 mb-20 activeBg">
                                <div className="faq-wrapper">
                                    <div className="section-title mb-45">
                                        <span className="b-sm-left-1"></span>
                                        <span className="b-sm-left-2"></span>
                                        <span className="sub-t-left" style={{color:"white"}}>PORTFOLIO 2</span>
                                        <h1 style={{color:"white"}}>Freelancer Engine</h1>
                                        <p style={{color:"white"}}>Freelancer Engine, PHP.</p>
                                    </div>
                                    <div className="faq-box">
                                        <AccordionCustom mode={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="about-area bg-white portfolio pt-130 mb-50 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-sm-6 mb-30">
                                <div className="single-about">
                                    <div className="about-us-img">
                                        <img src="assets/img/about/06.jpeg" alt=""/>
                                        <div className="about-us-2-img">
                                            <div className="about-inner-img about-2-inner">
                                                {/*<img src="assets/img/about/04.jpg" alt=""/>*/}
                                                {/*<div className="about-video">*/}
                                                {/*    <a className="popup-video"*/}
                                                {/*       href="https://www.youtube.com/watch?v=LTXD6XZXc3U"><i><FontAwesomeIcon*/}
                                                {/*        icon={['fas', 'play']}/></i></a>*/}
                                                {/*</div>*/}
                                                <VideoCustom idVideo="GqrRxohVRJE"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-6 mb-20">
                                <div className="faq-wrapper">
                                    <div className="section-title mb-45">
                                        <span className="b-sm-left-1"></span>
                                        <span className="b-sm-left-2"></span>
                                        <span className="sub-t-left">PORTFOLIO 3</span>
                                        <h1>Create TRC20 token and wallet</h1>
                                        <p>.NET Core, Blockchain, Crypto, Nodejs, React, React Native</p>
                                    </div>
                                    <div className="faq-box">
                                        <AccordionCustom mode={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <Cta />

             <Team />
            {/* <!-- about-area-end --> */}

            {/* <!-- services-area-start --> */}
            {/*<div className="services-area pt-120 pb-100" style={{ backgroundImage: `url(${'assets/img/bg/bg-1.jpg'})` }}>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">*/}
            {/*                <div className="section-title text-center ml-50 mr-50 mb-80">*/}
            {/*                    <span className="border-left-1"></span>*/}
            {/*                    <span>what we do</span>*/}
            {/*                    <span className="border-right-1"></span>*/}
            {/*                    <h1>We provide exclusive services for your business</h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-01.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Web Development</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-2.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Database Analysis</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-3.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Server Security</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-4.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>UX/UI Strategy</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-5.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Analysis For Tools</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="services-wrapper text-center">*/}
            {/*                    <div className="services-img">*/}
            {/*                        <img src="assets/img/icon/icon-6.png" alt="" />*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Marketing Strategy</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* <!-- services-area-end --> */}
            {/* <!-- contact-area-start --> */}
            {/* <div className="contact-2-area pt-130 pb-100 theme-bg ">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-7 col-lg-7 ">*/}
            {/*                <div className="contact-wrapper mb-30">*/}
            {/*                    <div className="section-title section-title-white mb-25">*/}
            {/*                        <span className="b-sm-left-2"></span>*/}
            {/*                        <span className="sub-t-left">contact us</span>*/}
            {/*                        <h1>Don't Hesitate To <br /> Contact Us</h1>*/}
            {/*                    </div>*/}
            {/*                    <form action="assets/mail.php" id="contact-form">*/}
            {/*                            <div className="row">*/}
            {/*                                <div className="col-xl-6 mb-10">*/}
            {/*                                    <div className="form-2-box user-icon mb-10">*/}
            {/*                                        <input name="name" placeholder="Full Name Here" type="text" />*/}
            {/*                                        <span><i><FontAwesomeIcon icon={['fas', 'user']} /></i></span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="col-xl-6 mb-10">*/}
            {/*                                    <div className="form-2-box email-2-icon mb-10">*/}
            {/*                                        <input name="email" placeholder="Email Address" type="email" />*/}
            {/*                                        <span><i><FontAwesomeIcon icon={['fas', 'envelope']} /></i></span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="col-xl-12 mb-35">*/}
            {/*                                    <div className="form-2-box sub-icon mb-10">*/}
            {/*                                        <input name="subject" placeholder="Subject" type="text" />*/}
            {/*                                        <span><i><FontAwesomeIcon icon={['fas', 'chevron-down']} /></i></span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="col-xl-12 mb-30">*/}
            {/*                                    <div className="form-2-box message-2-icon mb-10">*/}
            {/*                                        <textarea name="message" cols="30" rows="10" placeholder="Message" id="message"></textarea>*/}
            {/*                                        <span><i><FontAwesomeIcon icon={['fas', 'pencil-alt']} /></i></span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="col-xl-12">*/}
            {/*                                    <button className="btn" type="submit"><span className="btn-texts">send message <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> <span className="btn-border"></span></button>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        <p className="form-message"></p>*/}
            {/*                    </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-5 col-lg-5">*/}
            {/*            <div className="map-img mb-30">*/}
            {/*                <img src="assets/img/bg/map.png" alt="" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    </div>*/}
            {/* </div>*/}
            {/* <!-- contact-area-end --> */}
            </main>
        );
    }
}

export default ServiceOneMain;
