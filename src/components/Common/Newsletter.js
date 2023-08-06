import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {connect} from 'react-redux';
import SubscribeForm from '../Elements/Subscribe/SubscribeForm';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}


const Newsletter = () => {

    return (
        <div className="newsletter-area pt-75 pb-40" style={{backgroundImage: 'url(assets/img/bg/bg-5.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInTop 2s">
                        <div className="cta-text mb-30">
                            <h1>Tell us about your ideas <br/>
                                together we make them happen
                            </h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 animate"  data-animate="slideInBottom 0.5s">
                        <div className="cta-button text-lg-right mb-30">
                            {/* <a onClick={scrollTopNeed} className="btn btn-white btn-none"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a> */}
                            <a className="cta-link" style={{fontWeight:600}} href="tel:(+84)383396560"><i className="far fa-phone"/> (+84) 38 339 6560</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
