import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BlogGrid = () => {

    return (
        <div id='blog-box' className="blog-area pt-120">
            <div className="container">
                <div className="row mb-55">
                    <div className="col-xl-6 col-lg-6 col-md-8 mb-30 animate" data-animate="slideInLeft 1s">
                        <div className="section-title">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">our blog</span>
                            <h1> Read our latest <br /> news & blogs</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 mb-30 animate" data-animate="slideInRight 1s">
                        <div className="bolg-top-button text-md-right mt-90">
                            <a target="_blank" className="btn" href="https://www.facebook.com/sapotacorp"><span className="btn-text">view all News <i><FontAwesomeIcon
                                prefix='fas' icon={'long-arrow-alt-right'} /></i></span></a>
                        </div>
                    </div>
                </div>
                <div className="row mb-100 animate" data-animate="slideInRight 1s">
                    <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
                        <div className="blog-wrapper">
                            <div className="blog-img">
                                <Link
                                    href="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"
                                    as="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"><a target="_blank"><img
                                        src="assets/img/sapota/RV_Facebook_resize.png" alt="img" /></a></Link>
                            </div>
                            <div className="blog-meta">
                                <span> <i className="far fa-user"></i>Admin</span>
                                <span> <i className="far fa-calendar-check"></i> 24 February 2023</span>
                                <span> <i className="far fa-comments"></i> (1)</span>
                            </div>
                            <div className="blog-text">
                                <h3><Link
                                    href="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"
                                    as="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"><a target="_blank">
                                        Your satisfaction is our energy in working
                                    </a></Link></h3>
                                <p>Sapota's goal in business is to deliver on-time work of the highest quality. We always listen and create the best value for our customers.
                                </p>
                                <Link
                                    href="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"
                                    as="https://www.facebook.com/sapotacorp/posts/pfbid02pFqvbP8zWc6NFeWaV8QdcEcgKkS3E1rVScED6Cq6Xi6gmXW2t4Na946yeqeeGNWSl"><a target="_blank"><span
                                        className="blog-button">read more <i><FontAwesomeIcon
                                            icon={['fas', 'long-arrow-alt-right']} /></i></span></a></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="blog-border mb-30">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="blog-img">
                                        <Link href="https://www.facebook.com/sapotacorp/posts/pfbid0xg88ajTWgbV76dDk3pVV9C4gVKi9hrV54xq1KScz2L3x48q7S9RHw6aAqmixKv9tl"
                                            as="https://www.facebook.com/sapotacorp/posts/pfbid0xg88ajTWgbV76dDk3pVV9C4gVKi9hrV54xq1KScz2L3x48q7S9RHw6aAqmixKv9tl"><a target="_blank" ><img
                                                src="assets/img/sapota/4 Steps_resize.png" alt="img" /></a></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="single-blog">
                                        <div className="blog-meta">
                                            <span> <i className="far fa-user"></i>Admin</span>
                                            <span> <i className="far fa-calendar-check"></i> 10 February 2023</span>
                                            <span> <i className="far fa-comments"></i> (03)</span>
                                        </div>
                                        <div className="blog-text">
                                            <h3><Link
                                                href="https://www.facebook.com/sapotacorp/posts/pfbid0xg88ajTWgbV76dDk3pVV9C4gVKi9hrV54xq1KScz2L3x48q7S9RHw6aAqmixKv9tl"
                                                as="https://www.facebook.com/sapotacorp/posts/pfbid0xg88ajTWgbV76dDk3pVV9C4gVKi9hrV54xq1KScz2L3x48q7S9RHw6aAqmixKv9tl"><a target="_blank">
                                                    4 Steps that a SAPOTA-er conducts a project
                                                </a></Link></h3>
                                            <p>Our working process always conducts the following 4 steps to ensure that we understand our customer and provide the best service.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-border mb-30">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="blog-img">
                                        <Link
                                            href="https://www.facebook.com/sapotacorp/posts/pfbid0syeuVoxtus1Ex7xSDGyXqiZ8EeY96uHGtBngAEPPV9HdAVuJKCtvCfxRVY3dpudLl"
                                            as="https://www.facebook.com/sapotacorp/posts/pfbid0syeuVoxtus1Ex7xSDGyXqiZ8EeY96uHGtBngAEPPV9HdAVuJKCtvCfxRVY3dpudLl"><a target="_blank"><img
                                                src="assets/img/sapota/bring best service, receive best feedback.jpg" alt="img" /></a></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="single-blog">
                                        <div className="blog-meta">
                                            <span> <i className="far fa-user"></i>Admin</span>
                                            <span> <i className="far fa-calendar-check"></i>16 March 2023</span>
                                            <span> <i className="far fa-comments"></i> (01)</span>
                                        </div>
                                        <div className="blog-text">
                                            <h3><Link
                                                href="https://www.facebook.com/sapotacorp/posts/pfbid0syeuVoxtus1Ex7xSDGyXqiZ8EeY96uHGtBngAEPPV9HdAVuJKCtvCfxRVY3dpudLl"
                                                as="https://www.facebook.com/sapotacorp/posts/pfbid0syeuVoxtus1Ex7xSDGyXqiZ8EeY96uHGtBngAEPPV9HdAVuJKCtvCfxRVY3dpudLl"><a target="_blank">
                                                    Bring best sercives, receive best feedback
                                                </a></Link></h3>
                                            <p>
                                            We always organize periodic internal training sessions, to bring customers the best satisfaction about our services. All product output standards are always strictly regulated and controlled by our staff.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BlogGrid;