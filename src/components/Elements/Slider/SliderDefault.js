import React, { Component, useState } from 'react';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}
    const SliderDefault = () =>  {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button style={{display: 'none'}} type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button style={{display: 'none'}}  type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']}/></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
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
        <div className="slider-area">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='tFLZM3lZKPo' onClose={() => { openModal(); }} />
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slider-height slider-overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/sapota/slider/img-slider-2.jpg'})`}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-8 col-lg-8">
                                <div className="slider-content animate" data-animate="slideInLeft 2s">
                                        <h1 data-animation="fadeInLeft" data-delay=".3s">The <span className=''>trusted IT outsourcing provider</span></h1>
                                        <p data-animation="fadeInLeft" data-delay=".5s"><span className=''>SapotaCorp</span> proud to become the 1st partner of Laravel in Vietnam and create IT outsourcing solutions to help many startup building
                                         success digital products on the top market</p>
                                        {/* <p data-animation="fadeInLeft" data-delay=".5s">1.343+ reviews (ALL 5 STARS) and 100% Jobs Completed</p> */}
                                        <div style={{display: 'flex'}} className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                                            <div onClick={scrollTopNeed} ><a className="btn"><span className="btn-text">Join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span></a></div>
                                            <a  style={{marginLeft: '48px', display: 'flex', alignItems:'center'}} className="text-link text-slider-how-work" href="https://www.freelancer.com/u/sapotacorp" target="_blank"
                                               tabIndex="0">Read more reviews</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 d-none d-lg-block animate" data-animate="slideInRight 2s">
                                    <div className="slider-video text-md-right">
                                        {/* <a className="popup-video" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a> */}
                                        <a className="popup-video" target="_blank" href='https://www.facebook.com/media/set/?set=a.3166698410117455&type=3'><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default SliderDefault;