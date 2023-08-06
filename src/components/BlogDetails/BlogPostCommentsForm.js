import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class BlogCommentsForm extends Component {

    render() {
        return (
            <main>
                <div className="post-comments-form">
                    <div className="post-comments-title">
                        <h2>Post Comments 01</h2>
                    </div>
                    <form id="contacts-form" className="conatct-post-form" action="#">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-message">
                                    <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Your Comments...."></textarea>
                                    <span><i><FontAwesomeIcon icon={['fas', 'pencil-alt']} /></i></span>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-name">
                                    <input type="text" placeholder="Your Name.... " />
                                    <span><i><FontAwesomeIcon icon={['fas', 'user']} /></i></span>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-email">
                                    <input type="email" placeholder="Your Email...." />
                                    <span><i><FontAwesomeIcon icon={['fas', 'envelope']} /></i></span>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-website">
                                    <input type="text" placeholder="Your Website...." />
                                    <span><i><FontAwesomeIcon icon={['fas', 'globe']} /></i></span>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <button className="btn" type="submit"> <span className="btn-text">Post comment <i className="far fa-long-arrow-right"></i></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}


export default BlogCommentsForm;

