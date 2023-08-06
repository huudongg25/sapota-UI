import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}
const Service = () => {

    return (
        <div className="services-area pt-120 pb-100" style={{backgroundImage: 'url(assets/img/bg/bg-1.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                        <div className="section-title text-center ml-50 mr-50 mb-80 animate" data-animate="slideInLeft 1s">
                            <span className="border-left-1"/>
                            <span>what we do</span>
                            <span className="border-right-1"/>
                            <h1>We provide exclusive services for your business</h1>
                            <p style={{fontSize:18}}><span className='text-main-color'>SapotaCorp</span> assisted enterprises in elevating their values through blockchain development, web app development, mobile app development, custom software development,
                             IT consultancy, QA, and testing services.</p>
                        </div>
                    </div>
                </div>
                <div className="row animate" data-animate="slideInTop 1s">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-01.png" alt="" /> */}
                                {/* <i><FontAwesomeIcon icon="fas fa-cube" style={{ fontSize: 65, color: '#096BD8' }} /></i>  */}
                                <i style={{fontSize: 65, color: '#096BD8'}} className="fas fa-cube"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>Blockchain Development</h3>
                                    <p className='text'>We bring the best-in-class blockchain solutions to startups and enterprises to seize the future economy.</p>
                                </div>

                                <Link href="/blockchain-development">
                                    <a className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-2.png" alt="" /> */}
                                <i style={{fontSize: 65, color: '#096BD8'}} className="fas fa-desktop"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>Web App Development</h3>
                                    <p className='text'>Web - Mobile Development Service helps create based software and ensures a great user experience.</p>
                                </div>

                                <Link href="/web-app-development">
                                    <a  className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-3.png" alt="" /> */}
                                {/*<FontAwesomeIcon icon="fas fa-mobile-alt" style={{ fontSize: 65, color: '#096BD8' }} />*/}
                                <i style={{fontSize: 65, color: '#096BD8'}}
                                   className="fa-solid fas fa-mobile-alt"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>Mobile App Development</h3>
                                    <p className='text'>Create new custom software solutions, improve existing solutions, and modernize legacy systems.</p>
                                </div>

                             <Link href="/mobile-app-development">
                                    <a  className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                             </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-4.png" alt="" /> */}
                                <i style={{fontSize: 65, color: '#096BD8'}} className="fas fa-code"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>Custom Software</h3>
                                    <p className='text'>
                                    Create new custom software solutions, improve existing solutions, and modernize legacy systems.
                                    </p>
                                </div>

                                <Link href="/customize-software">
                                    <a  className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-5.png" alt="" /> */}
                                <i style={{fontSize: 65, color: '#096BD8'}} className="fas fa-comments"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>IT Consultancy</h3>
                                    <p className='text'>Improve the performance competitiveness through the right technology enablement and usage.
                                    </p>
                                </div>

                               <Link href="/IT-consultancy">
                                    <a className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                               </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                {/* <img src="assets/img/icon/icon-6.png" alt="" /> */}
                                <i style={{fontSize: 65, color: '#096BD8'}} className="fas fa-clipboard-list"/>
                            </div>
                            <div className="services-text">
                                <div>
                                    <h3>QA and Testing</h3>
                                    <p className='text'>Provide QA & software testing services to fulfill all quality and testing needs.
                                    </p>
                                </div>

                             <Link href="/QA-&-testing">
                                    <a  className="services-btn-wrapper"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                             </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;