import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TestimonialDefault from '../Elements/Testimonials/TestimonialsDefault';

const Testimonial = () =>  {

    return (
        <div className="testimonial-area testimonial">
            <div className="container">
                <div className="row">
                    <div className="testimonial-area__custom col-xl-6 col-lg-6 col-sm-6 mb-30 animate" data-animate="slideInRight 1s">
                        <div className="section-title  mb-45">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">Testimonials</span>
                            <h1>What Our Clients Say About us</h1>
                        </div>
                        <TestimonialDefault />
                        <div  className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                            {/*<a href="https://www.freelancer.com/u/sapotacorp?action=hireme&track-hireme-email=1&track-type=emailSignature&ft_prog=HME&ft_prog_id=11150351 ">*/}
                            {/*    <a className="btn"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span></a>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                    <div className="testimonial-area__custom col-xl-6 col-lg-6 col-sm-6">
                        <div className="testimonial-img animate" data-animate="slideInLeft 1s">
                            <img src="assets/img/sapota/img-person/admin-dn_rz.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;