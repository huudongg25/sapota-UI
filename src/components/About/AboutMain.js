import React, { Component, useState } from "react";
import Slider from "react-slick";
import AccordionDefault from "../Elements/Accordion/AccordionDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "../Home/TeamSection";
import Cta from "../Home/CtaSection";
import VideoCustom from "../Home/VideoCustom";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const data = [
  {
    name: "DRUPAL",
    content:
      "We achieved a Drupal certificate with a score of 100% (the exam average is 64%). We have completed projects on Drupal successfully.",
    icon: `fab fa-drupal`,
    loading: 100,
    activeMb: true,
  },
  {
    name: "JAVASCRIPT LEVEL 2",
    content:
      "We have achieved Javascript Level 2 with 97% score. We have completed projects on Javascript Level 2 successfully and received satisfaction from our customers.",
    icon: "icon-js-icon-custom",
    loading: 97,
    activeMb: false,
  },
  {
    name: "PHP LEVEL 2",
    content:
      "We have achieved a PHP Level 2 certificate with a score of 95%. We have completed projects on PHP Level 2 successfully and received many positive feedback.",
    icon: "fab fa-php",
    loading: 95,
    activeMb: false,
  },
  {
    name: "JAVASCRIPT LEVEL 1",
    content:
      "We have achieved a Javascript Level 1 certificate with a score of 95%. Customers always feel satisfied and secure when they assigning us.",
    icon: "icon-js-icon-custom",
    loading: 95,
    activeMb: true,
  },
  {
    name: "NUMERACY 1",
    content:
      "We achieved Numeracy 1 certification with a score of 94%. We always provide our customers with the best products.",
    icon: "fas fa-calculator-alt",
    loading: 94,
    activeMb: true,
  },
  {
    name: "PYTHON LEVEL 1",
    content:
      "We have achieved Python Level 1 with a score of 95%. We have completed projects on Python Level 1 successfully and give our customers the best choice.",
    icon: "fab fa-python",
    loading: 95,
    activeMb: false,
  },
  {
    name: "PYTHON LEVEL 3",
    content:
      "We have achieved a PHP Level 3 certificate with a score of 90%. We have professional and experienced programmers who best meet the requirements of our customers.",
    icon: "fab fa-php",
    loading: 90,
    activeMb: false,
  },
  {
    name: "WORDPRESS",
    content:
      "We have achieved WordPress certification with a score of 90%. We have completed projects on WordPress successfully and always get the trust from customers.",
    icon: "fab fa-wordpress-simple",
    loading: 90,
    activeMb: true,
  },
  {
    name: "PHP LEVEL 1",
    content:
      "We have achieved PHP Level 1 with a score of 88%. We have completed projects on PHP Level 1 successfully and received satisfaction from customers.",
    icon: "fab fa-php",
    loading: 88,
    activeMb: true,
  },
  {
    name: "JAVASCRIPT LEVEL 3",
    content:
      "We have achieved a Javascript Level 3 certificate with an 87% score. We always understand and bring customers the best products and services.",
    icon: "icon-js-icon-custom",
    loading: 87,
    activeMb: false,
  },
  {
    name: "JOOMLA 1",
    content:
      "We have achieved Joomla 1 certification with an 85% score. We have professional and experienced programmers who best meet the requirements of our customers.",
    icon: "fab fa-joomla",
    loading: 85,
    activeMb: false,
  },
  {
    name: "ASP LEVEL 2",
    content:
      "We have achieved an ASP Level 2 certificate with an 80% score. We have completed projects on ASP Level 2 successfully.",
    icon: "fas fa-wave-sine",
    loading: 80,
    activeMb: true,
  },
  {
    name: "ASP LEVEL 1",
    content:
      "We have achieved ASP Level 1 certificate with a score of 75%. We always receive positive feedback from customers about the product and service quality.",
    icon: "fas fa-wave-sine",
    loading: 75,
    activeMb: true,
  },
];
const dataComment = [
  {
    content:
      "These guys are fantastic! Good customer service, quick to complete the project, and very knowledgeable about what they do. This is the second time I hire them. They did not disappoint. I will hire them again.",
    name: "Mr. Hashem E",
    linkImg: "",
    country: "Canada",
  },
];

function TestiNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" onClick={onClick} className="button-slick-about-next">
      <i className="fal fa-angle-right" />
    </button>
  );
}

function TestiPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" onClick={onClick} className="button-slick-about-prev">
      <i className="fal fa-angle-left" />
    </button>
  );
}

const CounterDefault = () => {

    const [isViewCount, setIsViewCount] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    // function convertNumber(val) {
    //     let arr = []
    //     String(val).split('').reverse().forEach((item, index) => {
    //         if ((index + 1) % 3 === 0) {
    //             arr.push(item);
    //             arr.push('.');
    //         } else {
    //             arr.push(item)
    //         }
    //     })
    //     return arr.reverse().join('')
    // }

    const counters = [
        {
            countIconPrefix: '',
            countNum: 1300,
            countTitle: 'Projects',
            icon:'+'
        },
        {
            countIconPrefix: '',
            countNum: 96,
            countTitle: 'On Time',
            icon:'%'
        },
        {
            countIconPrefix: '',
            countNum: 100,
            countTitle: 'Jobs Completed',
            icon:'%'
        },
        {
            countIconPrefix: '',
            countNum: 96,
            countTitle: 'On Budget',
            icon:'%'
        },
    ];

    return (
            <div className="container" style={{height:'50%'}}>
                {counters &&
                <div className="row">
                    {counters.map((counter, num) => (
                        <div key={num} className="col-6">
                            <div className="counter-wrapper-about mb-30 animate" data-animate="scaleUpCenter 0.5s">
                                <div className="counter-text-about">
                                    <h1><span className="counter">
                                {/*<VisibilitySensor onChange={onVisibilityChange} offset={{top:0}} delayedCall={true}>*/}
                                        {/*    <CountUp separator='.'  end={!isViewCount ? counter.countNum : 0} />*/}
                                        {/*</VisibilitySensor>*/}
                                <CountUp separator='.'  start={focus ? 0 : null} end={counter.countNum} duration={4} redraw={true}>
                                             {({countUpRef}) => (
                                         <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) {
                                                setFocus(true);
                                             }
                                              }}>
                                          <span ref={countUpRef}/>
                                   </VisibilitySensor>
                                       )}
                                    </CountUp>
                                </span><span className="plus-icon-about">{counter.icon}</span></h1>
                                    <p className="counter-title">{counter.countTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
            </div>
    )
}



class AboutMain extends Component {
  state = {
    settings: {
      className: "client-active",
      dots: false,
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: 0,
      nextArrow: <TestiNextArrow />,
      prevArrow: <TestiPrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  render() {
    return (
      <main>
        {/* about-area-start */}
        <div className="client-active about-area pt-40 pb-40">
          <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6  animate" data-animate="slideInLeft 1s">
                  <div className="about-2-img" >
                    <img
                      src="assets/img/about/02-repeat.jpg"
                      style={{ paddingTop: "17px" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-30 animate" data-animate="slideInRight 1s">
                  <div className="about-1-wrapper">
                    <div className="about-text">
                      <span className="name-company">SAPOTACORP</span>
                      <h1>Believe, Union and the way to success</h1>
                      <p style={{ fontSize: 18 }}>
                        <span className="text-main-color">SapotaCorp</span> is a{" "}
                        <span className="text-main-color">
                          Vietnam software outsourcing company
                        </span>
                        , which is the partner of choice for many leading
                        enterprises, SMEs and technology challenges in generating
                        practical benefits based on providing high-quality
                        technology products, with the purpose of supporting
                        customers to achieve their great success.
                      </p>
                      <p className="mt-20" style={{ fontSize: 18 }}>
                        At <span className="text-main-color">SapotaCorp</span>, we
                        build and deliver CMS, FinTech and Ecommerce solutions for
                        digital agencies and major brands across the globe, as
                        well as assist digital agencies and IT companies to expand
                        their offer with Open Source development services and to
                        improve their time-to-market.
                      </p>
                    </div>
                    {/* <div className="about-button">
                                          <a className="btn" href="/request-a-quote"><span
                                              className="btn-text">JOIN WITH US <i><FontAwesomeIcon
                                              icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                      </div> */}
                  </div>
                </div>
              </div>
          
          
        
        {/* about-area-end */}
        
        </div>
        </div>
        <div className="mission-area  pt-40 pb-100">
          <div className="container">
                <div className="row mt-30">
                  <div className="col-xl-6 col-lg-6  mb-20 animate" data-animate="slideInTop 1s">
                  <div className="about-1-wrapper">
                  <div className="about-text">
                    <span className="name-company">MISSION & VISION</span>
                    <p style={{ fontSize: 18,marginTop:17 }}>
                      1. Providing the most advanced and cutting edge website
                      and software solutions for businesses.
                    </p>
                  
                    <p style={{ fontSize: 18,marginTop:10 }}>
                      2. Training a team to develop a variety of skills for
                      comprehensive research and work.
                    </p>
                    <p style={{ fontSize: 18,marginTop:10 }}>
                      3. Assembling a team of exceptional individuals who excel
                      in the niche they pursue to produce the best combinations
                      of services.
                    </p>
                    <p style={{ fontSize: 18,marginTop:10 }}>
                      4. Innovating constantly to create outstanding technology
                      solutions to serve the world market and contribute to
                      humanity.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 col-lg-6  mb-20 animate " style={{ width: "100%" }} data-animate="slideInRight 1s">
                <div className="about-2-img" style={{ width: "100%" }}>
                  <img
                    src="assets/img/sapota/newAbout.jpg"
                    style={{ paddingTop: "17px" }}
                    alt="sapota"
                  />
                </div>
                </div>
            </div>
          </div>
        </div>
        {/* services-area-start */}
        {/* <div className="services-area  pb-90">
                    <div className="container">

                        <div className="row">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={`item-card col-xl-4 col-lg-4 col-md-6 mb-30  ${item.activeMb ? 'activeMb' : 'noneActiveMb'}`}>
                                            <div className="single-services  text-center">
                                                <div className="services-icon">
                                                    <i className={item.icon}/>
                                                </div>
                                                <div className="services-text">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.content} </p>


                                                    <div>
                                                        <div className="btn-about-main">
                                                            <button className=''>
                                                                <span>{item.loading} %</span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                    </div>
                </div> */}
        {/* services-area-end */}
        <div className="services-area  pb-90">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 animate" data-animate="slideInRight 1s">
                            <div className="section-title  mb-70">
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">our story</span>
                            </div>
                        </div>
                    </div>
                    <div className="row animate mb-20" data-animate="slideInTop 1s">
                        <div className="milestone milestone-desktop">
                           <img src="assets/img/sapota/Milestone.jpg" alt="Sapota" />
                        </div>
                        <div className="milestone milestone-mobile">
                           <img src="assets/img/sapota/Black & Orange Modern Clean Professional Company Profile Presentation.jpg" alt="Sapota" />
                        </div>
                    </div>
                    <div className="row animate freelancer-box-desktop" data-animate="slideInTop 1s">
                        <div className="freelancer-wrapper">
                           <img className="freelancer-img" src="assets/img/sapota/SapotaCorp Profile 7.jpg" alt="Sapota" />
                           <div className="row freelancer-timeline">
                                <CounterDefault/>
                           </div>
                        </div>
                    </div>
                    <div className="row animate freelancer-box-mb" data-animate="slideInTop 1s">
                        <div className="freelancer-wrapper">
                           <img className="freelancer-img" src="assets/img/sapota/SapotaCorp Profile 12.jpg" alt="Sapota" />
                        </div>
                    </div>

                    </div>
                </div>

        {/* choose-area-start */}
        <div
          className="choose-area pt-130 pb-130"
          style={{ backgroundImage: "url(assets/img/bg/bg-15.jpeg)" }}
        >
          <div className="choose-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 mb-30 animate"  data-animate="slideInTop 1s">
                  <div className="faq-wrapper">
                    <div className="section-title mb-45">
                      <span className="b-sm-left-1"></span>
                      <span className="b-sm-left-2"></span>
                      <span className="sub-t-left">why choose us</span>
                      <h1>We Are Expert In IT Solutions Services</h1>
                    </div>
                    <div className="faq-box faq-2-box">
                      <AccordionDefault />
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 mb-30 animate"  data-animate="slideInBottom 1s">
                  <div className="choose-wrapper">
                    <div className="choose-text">
                      <p style={{fontSize:17}}>
                        Are you ready to align your applications and IT
                        infrastructure with your business goals? Count on
                        SapotaCorp for expert guidance and capitalize on the
                        latest developments in the field. We have the right
                        knowledge and resources to develop and implement your IT
                        projects. Technology challenges are increasingly
                        complex. SapotaCorp helps you make the right decisions
                        and ensure that your next IT project is a success.
                      </p>
                    </div>
                    <div className="choose-img-certification">
                      <div className="certification-img">
                        <img src="assets/img/bg/video-repeat.jpeg" alt="" />
                        <div className="certification-2-img">
                          <div className="certification-img-inner-img certification-img-2-inner">
                            <VideoCustom idVideo="GqrRxohVRJE" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* choose-area-end */}

        <Team />

        {/* <Cta /> */}

        <div className="client-area dark pt-120 pb-100 grey-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                <div className="section-title  mb-70">
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">our testimonials</span>
                </div>
              </div>
            </div>
            <div className="row slider-comment-list">
              <div className="col-xl-12 col-lg-12 animate" data-animate="slideInTop 1s">
                <Slider {...this.state.settings}>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          These guys are fantastic! Good customer service, quick
                          to complete the project, and very knowledgeable about
                          what they do. This is the second time I hire them.
                          They did not disappoint. I will hire them again.
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person1.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>Mr. Hashem E</h4>
                            <span>Canada</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          This is my second time working with them, so far i am
                          very satisfied, easy to communicate and they always
                          asked to questions to make sure that everything is
                          good, also i like their developers. Will hire again
                          for sure.
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person2.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>Mr. Iurii K</h4>
                            <span>United States</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          I would recommend this Freelancer to anyone who knows
                          what they want. The Miracles Group professionals have
                          great attention to details – they see things and
                          provide adequate advice while working on the points.
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person3.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>New Line Invest Ltd</h4>
                            <span>Bulgaria</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          This is our second piece of work with SapotaCorp and
                          they have been great again. They listen to what we
                          wanted and produced exactly what we needed. We are
                          looking forward to moving onto the next stage of our
                          project with them .
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person4.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>Mr. Stephen D</h4>
                            <span>United Kingdom</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          Was impressed with the level of experience SapotaCorp
                          had as well as their professionalism. They understood
                          exactly what I needed and communicated with me
                          throughout the process. Very easy to work with!
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person5.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>Mr. Francisco E.</h4>
                            <span>Argentina</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item col">
                    <div className="client-say-wrapper mb-30">
                      <div className="client-say-text">
                        <p>
                          He has been doing our dev work since 2016 with almost
                          200 proposed projects. Great job. We are in
                          communications with them daily. After so many years
                          working with them, I traveled to meet them. Great,
                          hardworking people.
                        </p>
                        <div className="client-rating">
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={["fas", "star"]} />
                          </i>
                        </div>
                        <div className="clientsay-name">
                          <div className="client-say-img about-page-avatar">
                            <img
                              src="assets/img/comment-rating-icon/person6.png"
                              alt=""
                            />
                          </div>
                          <div className="client-say-content">
                            <h4>Mr. Adam G</h4>
                            <span>United States</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* client-area-end */}
      </main>
    );
  }
}

export default AboutMain;
