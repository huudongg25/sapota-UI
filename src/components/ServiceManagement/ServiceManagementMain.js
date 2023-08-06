import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';


function ServiceManagementMain() {
    return (
        <main>
            {/* <!-- management-area-start --> */}
            <div className="management-area pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6  text-content animate" data-animate="slideInTop 1s">
                            <div className="management-wrapper mb-30">
                                <div className="management-text">
                                    <h1>Blockchain Development</h1>
                                    <p >SapotaCorp has strong experiences in developing blockchain
                                     products by Blockchain-based game, Crypto Wallet, NFT marketplace,.. by fast update,
                                     advanced technologies and optimize cost consumptions for effective blockchain products for all.
                                    </p>
                                    {/* <p>Blockchain development services help create decentralized blockchain networks
                                        that provide increased traceability and security of data and transactions. A
                                        software development company with 9 years of experience, SapotaCorp offers
                                        end-to-end blockchain application development services to help product
                                        companies and non-IT enterprises build reliable blockchain solutions.
                                    </p>
                                    <p>We offer all kinds of full-stack public blockchain development, including
                                        tailoring public platform chain with protocols that fit your needs. We build
                                        private blockchain solutions for enterprises in various industries such as
                                        finance, supply chain, loyalty, IoT using Hyperledger Fabric and R3
                                        Corda.</p>
                                    <p >Thanks to Blockchain technology, you can view and analyze transaction history
                                        and all related information, including any changes to the public Blockchain
                                        environment. Blockchain data is clear, complete and accurate, resulting in
                                        outstanding accountability, enabling you to take full control over your
                                        budget and spending.
                                    </p> */}
                                    <Link href='/blockchain-development'>
                                        <a  className="services-btn-wrapper-main"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 img-content animate" data-animate="scaleUpCenter 1s">
                            <div className="img-content__child management-img" >
                                <img src="assets/img/gif_services/blockchain-technology.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- management-area-end --> */}

            {/* <!-- it-management-area-start --> */}
            <div className="it-management-area pt-130 pb-100"
                 style={{backgroundImage: 'url(assets/img/bg/bg-8.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30 img-content animate" data-animate="slideInTop 1s">
                            <div className="img-content__child it-management-img">
                                <img src="assets/img/gif_services/Web%20App%20Development.gif" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30 text-content animate" data-animate="slideInRight 1s">
                            <div className="it-management-wrapper">
                                <div className="it-management-text">
                                    <h1>Web App Development</h1>
                                    <p>With more 300+ projects, SapotaCorp confident to creating flexible,
                                     specializes in both front-end and back-end solutions for web applications for customers.</p>
                                    {/* <p>Looking to create a strong brand identity and an online presence to
                                        streamline your business operations through your website? Our web design
                                        and development services can cater to your unique business needs.
                                        We ensure both usability and visibility, focusing on giving you
                                        optimum customer engagement.</p>
                                    <p>Creating a website from scratch, including requirements gathering, design,
                                        implementation, quality assurance as well as maintenance and support. If you
                                        have an old website. We will port your legacy website, including all the
                                        data, to a new, modern solution (it can be another content management
                                        system) with a slick and responsive user interface.
                                    </p>
                                    <p>
                                        Adapting your website for mobile phones and tablets of all platforms
                                        and screen sizes as well as using the portal as a back-end for a mobile app.
                                    </p> */}
                                 <Link href='/web-app-development'>
                                        <a  className="services-btn-wrapper-main"> <span  className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                 </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="management-area pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-content animate" data-animate="slideInRight 1s">
                            <div className="management-wrapper mb-30">
                                <div className="management-text">
                                    <h1>Mobile App Development</h1>
                                    <p>By experienced and expert devs team,
                                     SapotaCorp provides best mobile development services that deliver smooth mobile app experiences
                                     for digital consumers across all devices that are well-designed,
                                     practical, and cross-platform.</p>
                                    {/* <p>We offer end-to-end mobile app solutions for companies that are looking to
                                        build their online presence and brand identity on mobile. We give equal
                                        importance to aesthetics and functionality. Want to see your own app on the
                                        Play Store or the App Store? We can help you meet your market needs by
                                        building the app you envision — right from conception and design, to
                                        seamless integration and user experience!

                                    </p>
                                    <p>Bring your products and services closer to their users by implementing a
                                        custom mobile application developed with your business objectives in mind.
                                        We know how to do this in a fast and cost-efficient way for both iOS and
                                        Android, without compromising quality and usability.
                                    </p>
                                    <p>Whether you haven’t yet started your app development, are in the middle of
                                        it, or have issues with a finished app, our skilled experts are ready to
                                        render advisory or practical assistance. Our developers skillfully convert
                                        websites into mobile apps, redesign architectures, and refactor code in new
                                        tech.

                                    </p> */}
                                    <Link href='/mobile-app-development'>
                                        <a className="services-btn-wrapper-main"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 img-content animate" data-animate="slideInLeft 1s">
                            <div className="img-content__child management-img">
                                <img src="assets/img/gif_services/mobile-app-development-company-gurgaon.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="it-management-area pt-130 pb-100"
                 style={{backgroundImage: 'url(assets/img/bg/bg-8.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30 img-content animate" data-animate="slideInTop 1s">
                            <div className="img-content__child it-management-img">
                            <img src="assets/img/gif_services/it-consultancy.gif" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30 text-content animate" data-animate="slideInBottom 1s">
                            <div className="it-management-wrapper">
                                <div className="it-management-text">
                                    <h1>Custom Software</h1>
                                    <p>SapotaCorp provides an up-to-date and flexible platform and software with many features that improve the shopping experience without too much human intervention.
                                     The powerful platform will provide complete information, shopping filters, fast response, safety, and information storage on the operating system.
                                    </p>
                                    <p> One of Sapota's strengths is building optimized back-end and front-end systems for processes depending on needs and business models.
                                     Therefore, Sapota committee delivers fully quality products to the demands of every customer.</p>
                                    {/* <p>Our custom software development solutions are provided with rapid innovation
                                        that accelerates time to market engagement by minimizing business risks. Our
                                        team of custom software development solutions would build highly scalable
                                        and better performing applicable software depending upon the products.</p>
                                    <p>It involves more than just coding. Our team is experienced in all aspects of
                                        custom application development including concept ideation, product
                                        management, UI/UX design, data modeling, AI, security testing & compliance.

                                    </p>
                                    <p>
                                        Custom software developed by SapotaCorp work on all standard platforms,
                                        operating systems, and mobile devices. Our apps are beautifully responsive
                                        and feature outstanding UX and UI design: ensuring users love the experience
                                        and your systems easily scale as you acquire more customers or employees.

                                    </p> */}
                                </div>
                                  <Link  href='/customize-software' >
                                        <a className="services-btn-wrapper-main"> <span  className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="management-area pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-content animate" data-animate="slideInRight 1s">
                            <div className="management-wrapper mb-30">
                                <div className="management-text">
                                    <h1>IT Consultancy</h1>
                                    <p>The growing popularity of modern technologies has fueled digital transformation and replicated the technological revolution in the new era. Grasping that trend,
                                     SapotaCorp provides customers with quality IT consulting services that are suitable for their needs.
                                    </p>
                                    <p>SapotaCorp helps financial businesses digitize,
                                     promote technology activities through a technical platform to improve customer experience,
                                     create competitive advantages, improve transparency,
                                     reduce operating costs and increase trust of partners and customers.</p>
                                    {/* <p>Use the expertise and deep tech background of the best minds at Intellectsoft
                                        to create a comprehensive IT strategy for a digital and technological
                                        transformation of your organization that goes in line with your business
                                        objectives. Our strategic IT consulting will help you automate and
                                        digitalise operations, optimise the software portfolio, and implement the
                                        latest technologies.
                                    </p>
                                    <p>For more than 9 years now SapotaCorp has been helping organizations of
                                        different scale and structure to improve and modernise their IT strategies.
                                        Some of our IT experts have worked in the industry for over 10 years. This
                                        has allowed us to craft an effective approach to IT consulting that enables
                                        us to deliver maximum benefit in the shortest time.
                                    </p>
                                    <p>We consistently keep track of emerging technologies to deliver advanced
                                        software solutions. Our IT strategy consulting will help you choose the
                                        right technologies for your business and industry, map out the
                                        implementation strategy, as well as help you implement them.
                                    </p> */}
                                    <Link href='/IT-consultancy'>
                                        <a  className="services-btn-wrapper-main"> <span className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 img-content animate" data-animate="slideInTop 1s">
                            <div className="img-content__child management-img">
                                <img src="assets/img/gif_services/customsoftware.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="it-management-area pt-130 pb-100"
                 style={{backgroundImage: 'url(assets/img/bg/bg-8.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30 img-content animate" data-animate="slideInLeft 1s">
                            <div className="img-content__child it-management-img">
                                <img src="assets/img/gif_services/QAandTesting.gif" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30 text-content animate" data-animate="slideInRight 1s">
                            <div className="it-management-wrapper">
                                <div className="it-management-text">
                                    <h1>QA and Testing</h1>
                                    <p>Sapota provides a wide range of independent system testing and QA services that comply with the most stringent security and industry standards.
                                     We can improve the quality of your product while reducing time-to-market, management risks,
                                     and operating costs by utilizing our testing labs, QA expertise, and team flexibility.</p>
                                    {/* <p>In today’s competitive business world, companies expect faster, more
                                        efficient software solutions with no quality sacrifices. SapotaCorp provides
                                        QA & software testing services to fulfill all your quality and testing
                                        needs.
                                    </p>
                                    <p>For 9 years in software testing services, SapotaCorp has built testing
                                        expertise. Our goal-driven self-managed testing experts can quickly dive
                                        into your project (within 3-5 days) and validate every aspect of your
                                        software: functional, integration, performance, usability, and security.


                                    </p>
                                    <p>
                                        We are able to increase the quality of your product while reducing
                                        time-to-market, management risks and operating costs. Our professional
                                        management ensures you the best resources for your needs. Our work is
                                        transparent and efficient and thus regular check-ins are welcomed. So don't
                                        hesitate to contact us.


                                    </p> */}
                                    <Link href='/QA-&-testing'>
                                        <a  className="services-btn-wrapper-main"> <span  className="services-button">read more <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- it-management-area-end --> */}


            {/* <!-- services-area-start --> */}
            {/*<div className="services-area pt-100 pb-100">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">*/}
            {/*                <div className="section-title text-center mb-80">*/}
            {/*                    <h1>Mobile App Development. </h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="single-services text-center">*/}
            {/*                    <div className="services-icon">*/}
            {/*                        <i className="fas fa-laptop-code"></i>*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Web Development</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the*/}
            {/*                            readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="single-services active text-center">*/}
            {/*                    <div className="services-icon">*/}
            {/*                        <i className="fas fa-database"></i>*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Database Analysis</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the*/}
            {/*                            readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
            {/*                <div className="single-services text-center">*/}
            {/*                    <div className="services-icon">*/}
            {/*                        <i className="fas fa-server"></i>*/}
            {/*                    </div>*/}
            {/*                    <div className="services-text">*/}
            {/*                        <h3>Server Security</h3>*/}
            {/*                        <p>It is a long established fact that a reader will be distracted by the*/}
            {/*                            readable content of a page when looking </p>*/}
            {/*                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* <!-- services-area-end --> */}

            {/* <!-- pricing-area-start --> */}
            {/*<div className="pricing-area pt-100 pb-100" style={{backgroundImage: 'url(assets/img/bg/bg-10.jpg)'}}>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">*/}
            {/*                <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">*/}
            {/*                    <h1>Exclusive Pricing Planning</h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6">*/}
            {/*                <div className="pricing-wrapper text-center mb-30">*/}
            {/*                    <div className="pricing-icon">*/}
            {/*                        <img src="assets/img/icon/p-1.png" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-top-text">*/}
            {/*                        <h3>basic plan</h3>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-menu">*/}
            {/*                        <ul>*/}
            {/*                            <li>IT Solutions</li>*/}
            {/*                            <li>Software Development</li>*/}
            {/*                            <li>UX/UI Strategy</li>*/}
            {/*                            <li>IT Consulting</li>*/}
            {/*                            <li>Product Design</li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                    <div className="price-count">*/}
            {/*                        <h1><span className="usd">$</span>15.99</h1>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-button">*/}
            {/*                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6">*/}
            {/*                <div className="pricing-wrapper active text-center mb-30">*/}
            {/*                    <div className="pricing-icon">*/}
            {/*                        <img src="assets/img/icon/p-2.png" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-top-text">*/}
            {/*                        <h3>standard plan</h3>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-menu">*/}
            {/*                        <ul>*/}
            {/*                            <li>IT Solutions</li>*/}
            {/*                            <li>Software Development</li>*/}
            {/*                            <li>UX/UI Strategy</li>*/}
            {/*                            <li>IT Consulting</li>*/}
            {/*                            <li>Product Design</li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                    <div className="price-count">*/}
            {/*                        <h1><span className="usd">$</span>49.99</h1>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-button active">*/}
            {/*                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-4 col-lg-4 col-md-6">*/}
            {/*                <div className="pricing-wrapper text-center mb-30">*/}
            {/*                    <div className="pricing-icon">*/}
            {/*                        <img src="assets/img/icon/p-3.png" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-top-text">*/}
            {/*                        <h3>premium plan</h3>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-menu">*/}
            {/*                        <ul>*/}
            {/*                            <li>IT Solutions</li>*/}
            {/*                            <li>Software Development</li>*/}
            {/*                            <li>UX/UI Strategy</li>*/}
            {/*                            <li>IT Consulting</li>*/}
            {/*                            <li>Product Design</li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                    <div className="price-count">*/}
            {/*                        <h1><span className="usd">$</span>89.99</h1>*/}
            {/*                    </div>*/}
            {/*                    <div className="pricing-button">*/}
            {/*                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon*/}
            {/*                            icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* <!-- pricing-area-end --> */}
        </main>
    );

}

export default ServiceManagementMain;


        
