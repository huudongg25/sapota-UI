import React, {Component} from 'react';
import Slider from "react-slick";

const Brand = () => {

    const brandSettings = {
        className: "brand-active",
        centerMode: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding: 0,
        autoplaySpeed:1500,
        autoplay:true,
        draggable:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
    };

    const techLogo = [
        "assets/img/sapota/tech-logo/1F2EB560-40CA-4659-BBD9-E1CB9C2596AE.png",
        "assets/img/sapota/tech-logo/2D20F4A8-6CB6-4468-B9FA-2EA27B4F7032.png",
        "assets/img/sapota/tech-logo/38F10B36-EFFE-43DA-B525-BAC2A58753F9.png",
        "assets/img/sapota/tech-logo/85593EEB-65EB-4207-A16F-A42B01A3DAED.png",
        "assets/img/sapota/tech-logo/442259E6-4832-48DD-A100-8DB0A5FABE2E.png",
        "assets/img/sapota/tech-logo/8273421B-25ED-4AEC-8052-4ECDC61EDB8D.png",
        "assets/img/sapota/tech-logo/8A0C497A-3843-4A6C-94BB-8D9F1251BA28.png",
        "assets/img/sapota/tech-logo/34223383-FED2-4267-A476-5675C593650C.png",
        "assets/img/sapota/tech-logo/D42FF0DC-B9BF-412A-AAE4-CFB979D03333.png",
        "assets/img/sapota/tech-logo/A9065DA9-5719-4C04-833E-8B52EC6B38C6.png",
        "assets/img/sapota/tech-logo/CE3F6A18-31F7-4644-B310-D1E47A3B3408.png",
        "assets/img/sapota/tech-logo/FE65A741-1A4D-45BB-AB0B-8700FC1E142E.png",
        "assets/img/sapota/tech-logo/A445865D-340D-4A64-85E1-EF11A20C32AA.webp",
    ]

    return (
        <div className="brand-area pt-130 ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 animate" data-animate="slideInTop 2s">
                        {/* <div className="section-title text-center mb-75 animate" data-animate="slideInRight 2s">
                                <span className="border-left-1"/>
                                <span>TECHNOLOGIES</span>
                                <span className="border-right-1"/>
                        </div> */}
                        <Slider {...brandSettings}>
                            {techLogo.map((item,index) =>
                                    <div key={index} className="brand-img text-center">
                                        <img src={item} alt="sapota"/>
                                    </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;