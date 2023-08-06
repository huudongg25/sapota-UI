import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TopHeader = () => {
    return (
        <div className="header-top-area grey-bg d-block d-md-block top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <a target="_blank" href="https://www.google.com/maps/place/101+Hu%E1%BB%B3nh+T%E1%BA%A5n+Ph%C3%A1t,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+B%E1%BA%AFc,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0362539,108.2121981,17z/data=!3m1!4b1!4m5!3m4!1s0x314219ecaa2652df:0x78adfd59353a951!8m2!3d16.0362539!4d108.2143868?hl=vi"> <i className="far fa-map-marker-alt"/> 101 Huynh Tan Phat, Hai Chau, Da Nang</a>

                            <a href="tel:(+84)383396560" className="header-ph"><i className="far fa-phone"/> (+84) 38 339 6560</a>
                            <a href="mailto:michael@sapotacorp.vn" className="header-en"><i className="far fa-envelope-open"/> michael@sapotacorp.vn</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="header-right f-right ">
                            {/*<div className="header-lang  pos-rel f-right">*/}
                            {/*    <div className="lang-icon"> */}
                            {/*        <Image src={'/assets/img/icon/flag.png'} height="20" width="30" alt='flag'  />*/}
                            {/*        <a href="">*/}
                            {/*            English*/}
                            {/*            /!* <i><FontAwesomeIcon prefix='fas' icon={'angle-down'} /></i> *!/*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*    /!* <ul className="header-lang-list">*/}
                            {/*        <li><a href="#">USA</a></li>*/}
                            {/*        <li><a href="#">UK</a></li>*/}
                            {/*        <li><a href="#">CA</a></li>*/}
                            {/*        <li><a href="#">AU</a></li>*/}
                            {/*    </ul> *!/*/}
                            {/*</div>*/}
                            <div className="header-icon f-right">
                                <a target="_blank" href="https://www.facebook.com/sapotacorp"><i><FontAwesomeIcon icon={['fab','facebook-f']} /></i></a>
                                <a target="_blank" href="https://twitter.com/SapotaC"><i><FontAwesomeIcon icon={['fab','twitter']} /></i></a>
                                <a target="_blank" href="https://www.linkedin.com/company/sapotacorp"><i><FontAwesomeIcon icon={['fab','linkedin']} /></i></a>
                                <a target="_blank" href="https://www.youtube.com/user/mBussiness"><i><FontAwesomeIcon icon={['fab','youtube']} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;