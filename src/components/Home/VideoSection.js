import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Video = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div id='contact-box' className="video-area section-contact-us pt-130" style={{backgroundImage: 'url(assets/img/bg/bg-14.jpeg)'}}>
            <div className="container">
                <div className="row">
                    {/*<ModalVideo channel='youtube' isOpen={isOpen} videoId='tFLZM3lZKPo' onClose={() => {*/}
                    {/*    openModal();*/}
                    {/*}}/>*/}
                    {/*<div className="col-xl-7 col-lg-7 mb-30">*/}
                    {/*    <div className="video-img">*/}
                    {/*        <img src="assets/img/bg/video.jpg" alt=""/>*/}
                    {/*        <div className="video-icon">*/}
                    {/*            <a className="popup-video" onClick={() => {*/}
                    {/*                openModal();*/}
                    {/*            }}><i><FontAwesomeIcon icon={['fas', 'play']}/></i></a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-xl-5 col-lg-5 mb-30">*/}
                    {/*    <div className="video-wrapper">*/}
                    {/*        <div className="section-title section-title-white custom-list-text">*/}
                    {/*            <span className="b-sm-left-1"></span>*/}
                    {/*            <span className="b-sm-left-2"></span>*/}
                    {/*            <span className="sub-t-left">ABOUT US</span>*/}
                    {/*            <h1>SapotaCorp</h1>*/}
                    {/*            <div style={{display: 'flex', justifyContent: 'flex-start'}}>*/}
                    {/*                <p>Office Address: </p>*/}
                    {/*                <div>*/}
                    {/*                    <p className="ml-1">150 Duy Tan, Hai Chau, Da Nang</p>*/}
                    {/*                    <p className="ml-1">295 Bach Mai, Hai Ba Trung, Ha Noi</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}


                    {/*            <p>Founded: June, 2013</p>*/}
                    {/*            <p>Representative and President: Michael Pham</p>*/}
                    {/*            <p>Services: Software Development, Technical Consultant</p>*/}
                    {/*            <p>Number of Employees: 150+ members</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Video;