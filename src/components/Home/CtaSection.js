import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}
const Cta = () => {

    return (
        <div className="cta-area pt-125 pb-75" style={{backgroundImage: 'url(assets/img/bg/bg-2.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                                <div className="cta-text mb-30">
                                    <h1>Let's talk about business solutions with SapotaCorp</h1>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="cta-button text-lg-right mb-30">
                                    <a onClick={scrollTopNeed} className="btn btn-white btn-none"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            <a className="cta-link" href="tel:(+84)383396560"><i className="far fa-phone"/> (+84) 38 339 6560</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;
