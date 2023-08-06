import React from 'react';
import Head from 'next/head';
import CarouselDefault from '../Elements/OwlCarousel/CarouselDefault';

const Project = () =>  {

    return (
        <React.Fragment>
            <Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
            <div className="project-area pt-125 pb-185  pl-140 pr-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title text-center mb-75 animate" data-animate="slideInRight 1s">
                                <span className="border-left-1"/>
                                <span>WHY SHOULD YOU CHOOSE US</span>
                                <span className="border-right-1"/>
                                <h1>A Few Good Reasons</h1>
                                <p style={{fontSize:18}}>The simple reason is that we are professional, enthusiastic, wholehearted, and accountable to our customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <CarouselDefault />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Project;