import React from 'react';
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TestimonialDefault = () => {

    function TestiNextArrow(props) {
        const {className, onClick} = props;
        return (
            <button type='button' onClick={onClick} className={className}>
                <i className="far fa-long-arrow-right"></i>
            </button>
        );
    }

    function TestiPrevArrow(props) {
        const {className, onClick} = props;
        return (
            <button type='button' onClick={onClick} className={className}>
                <i className="far fa-long-arrow-left"></i>
            </button>
        );
    }

    const testimonialSettings = {
        className: "testimonial-active",
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <TestiNextArrow/>,
        prevArrow: <TestiPrevArrow/>,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="testimonial-active testimonial-area">
            <Slider {...testimonialSettings}>

                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>This is my second time working with SapotaCorp. I’m very satisfied by easy communication and they always asked questions to make sure it followed the process and ensured the quality.
                             It’s very highly recommended to use this service again.</p>
                        <h4>Mr. Hashem E</h4>
                        <span>Canada</span>
                    </div>
                </div>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>Thanks to Sapota’s support, they helped me solve a lot of problems with my project and make it done perfectly. They also make communication processes easier to understand and deliver better performance during the job.
                         Great job, guy!!!</p>
                        <h4>Mr. Iurii K</h4>
                        <span>United States</span>
                    </div>
                </div>

                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>Fantastic !! SapotaCorp always brings good customer service, completes the job quickly and makes me very satisfied with the results.
                         This is the second time I worked with them and I highly recommend SapotaCorp to use their service again for my company as well as partners.</p>
                        <h4>Mr. Adam G</h4>
                        <span>United States</span>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default TestimonialDefault;