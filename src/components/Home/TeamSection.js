import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// function scrollTopNeed(){
//     const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
//     window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
// }
const dataPerson = [
    // {
    //     name: 'Michael Pham',
    //     title: 'Founder & CEO',
    //     linkImg: 'assets/img/sapota/img-team-member/Michael-Pham_rz.jpg'
    // },
    {
        name: 'Jeong Joseph',
        title: 'Country Head Korea',
        linkImg: 'assets/img/sapota/img-team-member/Jeong-Joseph_rz.jpg'
    },
    {
        name: 'Graham Elliott',
        title: 'Country Head Singapore',
        linkImg: 'assets/img/sapota/img-team-member/Graham-Elliott_rz.jpg'
    },
    // {
    //     name: 'David Pham',
    //     title: 'COO',
    //     linkImg: 'assets/img/sapota/img-team-member/David-Pham_rz.jpg'
    // },
    {
        name: 'Riddle Vo',
        title: 'Head of Danang Branch',
        linkImg: 'assets/img/sapota/img-team-member/Riddle-Vo_rz.jpg'
    },
    {
        name: 'Steve Nguyen',
        title: 'Head of Hanoi Branch',
        linkImg: 'assets/img/sapota/img-team-member/Steven-Nguyen_rz.jpg'
    },
    {
        name: 'Thanh Luu',
        title: 'QA Lead',
        linkImg: 'assets/img/sapota/img-team-member/thanh-luu_rz.jpg'
    },
    {
        name: 'Ha Nguyen',
        title: 'CMO',
        linkImg: 'assets/img/sapota/img-team-member/ha-nguyen_rz.jpg'
    },


]

const Team = () => {

    return (
        <div className="team-area pt-120 pb-100 pos-rel">
            <div className="shape d-none d-xl-block">
                <div className="shape-item team-01 bounce-animate"><img src="assets/img/shape/shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row mb-50">
                    <div className="col-xl-5 col-lg-6 animate" data-animate="slideInRight 1s">
                        <div className="section-title  mb-30">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">Meet Our Team</span>
                            <h1>Meet Experienced Team Members</h1>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-3 col-lg-6 animate"  data-animate="slideInLeft 1s">
                        <div className="team-section mb-30">
                            <p style={{fontFamily: 'Karla'}}>At SapotaCorp, we cooperate with customers closely to leverage our specialty, to make great ideas lively.
                                </p>
                            <a href='https://www.facebook.com/sapotacorp' target='_blank' className="btn"><span className="btn-text">join with us <i><FontAwesomeIcon
                                icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                        </div>
                    </div>
                </div>
                    <div className="row mb-30">
                        
                        <div className="col-xl-6 col-lg-6 col-sm-12 animate" data-animate="slideInLeft 1s">
                            <div className="about-2-img" style={{ width: "100%" }}>
                            <img
                                src="assets/img/sapota/img-team-member/Michael-Pham_rz.jpg"
                                style={{ paddingTop: "17px",borderTopRightRadius:300,borderTopLeftRadius:300 }}
                                alt=""
                            />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 animate" data-animate="slideInTop 1s">
                           <h1 className='name-ceo'>Michael Pham - CEO of SapotaCorp</h1>
                           <p style={{fontSize:18}}>A Software Engineer - more than 10-year experience competent in most of the latest platforms,
                             programming languages and technologies and solving difficult issues.</p>
                           <p  style={{fontSize:18}}>A Project Manager - 8 years of experience focused on developing new business ideas and leading high-impact projects.</p>
                            <h4>Certificates:</h4>
                            <ol className='list-certificates'>
                                <li>● Hanoi University of Technology, Hanoi, Vietnam - Bachelor in Information Technology 2010</li>
                                <li>● EPiServer CMS 7 Certificate 2015</li>
                                <li>● EPiServer Commerce Certificate 2014</li>
                                <li>● EPiServer CMS 6 Certificate 2013</li>
                                <li>● Certified ACM/ICPC 2009 – HUT Team 2009</li>
                                <li>● Certified Second Prize Olympic Student Information Technology Vietnam 2009</li>
                                <li>● Certified First Prize Olympic Student Information Technology BKHN 2009</li>
                            </ol>
    
                    </div>
              </div>
                <div className="row">
                    {
                        dataPerson.map((item, index) => {
                            return (
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30 animate" data-animate="slideInTop 1s">
                                    <div className="team-wrapper">
                                        <div>
                                        <div className="team-img">
                                            <img src={item.linkImg} alt=""/>
                                        </div>
                                        </div>

                                      
                                        <div className="team-text">
                                            <h4>{item.name}</h4>
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Team;