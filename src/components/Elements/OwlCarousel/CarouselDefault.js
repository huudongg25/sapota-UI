import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselDefault = () => {

    const navPrevIcon = () => ("<span style='display: none'><img src=\"assets/img/svg/long-arrow-left.svg\" with=\"50\"/></span>");
    const navNextIcon = () => ("<span style='display: none'><img src=\"assets/img/svg/long-arrow-right.svg\" /></span>");

    const options = {
        items: 1,
        nav: true,
        dots: true,
        rewind: false,
        autoplay: false,
        stagePadding: 380,
        loop: true,
        center: true,
        navText: [navPrevIcon,navNextIcon],
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                stagePadding: 0,

            },
            992: {
                items: 1,
                stagePadding: 0,

            },
            1200: {
                items: 1,
                stagePadding: 380,
            },
            1500: {
                items: 1,
                stagePadding: 430,
            }
        }
    };

    return (
        <React.Fragment>
             {/*<OwlCarousel options={options} >*/}

                    {/*<div className="col-xl-12">*/}
                    {/*    <div className="project-wrapper">*/}
                    {/*        <div className="project-img">*/}
                    {/*            <a href="#"><img src="assets/img/project/01.jpg" alt="" /></a>*/}
                    {/*            <div className="project-text">*/}
                    {/*                <span>business strategy</span>*/}
                    {/*                <h3><a href="#">Financial Solutions</a></h3>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-xl-12">*/}
                    {/*    <div className="project-wrapper">*/}
                    {/*        <div className="project-img">*/}
                    {/*            <a href="#"><img src="assets/img/project/02.jpg" alt="" /></a>*/}
                    {/*            <div className="project-text">*/}
                    {/*                <span>business strategy</span>*/}
                    {/*                <h3><a href="#">Financial Solutions</a></h3>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-xl-12">*/}
                    {/*    <div className="project-wrapper">*/}
                    {/*        <div className="project-img">*/}
                    {/*            <a href="#"><img src="assets/img/project/03.jpg" alt="" /></a>*/}
                    {/*            <div className="project-text">*/}
                    {/*                <span>business strategy</span>*/}
                    {/*                <h3><a href="#">Financial Solutions</a></h3>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-newspaper"/>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >White Label Services</a></h4>
                                                <span>Grow your own Web Development Business at no setup cost and overheads.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-dollar-sign"/>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Money Back Guarantee</a></h4>
                                                <span>You can cancel at any time and get a refund in 60 days.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-pound-sign"/>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Flexibility in Pricing</a></h4>
                                                <span>You can hire our experts on an hourly basis and also daily.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-heart"/>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Happy Customers</a></h4>
                                                <span>We have over 1164+ Happy Customers located in the USA, Australia, UK, Canada, and more than 58+ other countries.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-users"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Relationship Driven</a></h4>
                                                <span>We build trust and confidence by delivering what we promise – the first time and every time!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Expertise</a></h4>
                                                <span>Each Employee has 4+ yrs of experience and is supervised by a Technical Lead.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-calendar-day"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Daily Timesheets</a></h4>
                                                <span>We believe in transparency and share a detailed time-sheet via Project Management Tool and Google Docs.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-comments"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Specialization Benefits</a></h4>
                                                <span>Based on your requirements, you can hire developers that are most ideal for your requirements.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fab fa-angellist"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >On-time Delivery</a></h4>
                                                <span>Grow your own Web Development Business at no setup cost and overheads.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-file"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >NDA</a></h4>
                                                <span>We work under strict Non Disclosure Agreements (NDAs) and take customer confidentiality very seriously.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-briefcase"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >Easy Project Management</a></h4>
                                                <span>We offer free project management tools to monitor and manage your team.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12 mb-4 animate" data-animate="slideInLeft 1s">
                                <div className="project-wrapper">
                                    <div className="project-img">
                                        <div className='row'>
                                            <div className="col-2 mt-2">
                                                <i className="fas fa-ban"></i>
                                            </div>
                                            <div className="col-10">
                                                <h4><a href="#" >No Setup Fees</a></h4>
                                                <span>Our services are offered without any setup fee. You only pay for the work done.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


             {/*</OwlCarousel>*/}
        </React.Fragment>

    );
}
export default CarouselDefault;