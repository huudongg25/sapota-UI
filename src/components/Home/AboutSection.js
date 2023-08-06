import React from 'react';

const About = () => {

    return (
        <div className="about-area pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-text animate"  data-animate="slideInLeft 1s">
                            <span>who we are</span>
                            <h1>More than 9+ years we provide <span>IT solutions </span></h1>
                            <p style={{textAlign: 'justify',fontSize:18}}>
                            <span className='text-main-color'>SapotaCorp</span> - a Vietnam software outsourcing company, is the partner of leading enterprises,
                             SMEs and technology challenges in generating benefits based <span className='text-main-color'>on providing high-quality technology products</span>, with the purpose of supporting customers to achieve their great success.
                            </p>
                            {/* <a href="#">Our Services</a> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-img animate" data-animate="slideInTop 1s">
                            <img src="assets/img/sapota/newAbout2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-content animate" data-animate="slideInRight 1s">
                            <p style={{textAlign: 'justify',fontSize:18}}>
                            With more than 200 international experts specializing in the latest web and mobile solutions,
                             Sapota have “<span className='text-main-color'>made it happen</span>” with more than 1,300 projects since 2013. We work based on the philosophy of Create value with the Heart and only receive value commensurate with the effort and time spent.
                             So we are willing to refund if the customer is not satisfied
                                </p>
                            <div className="about-1-img">
                                <img src="assets/img/sapota/chu-ki-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;