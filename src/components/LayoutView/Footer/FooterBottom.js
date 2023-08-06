import React from 'react';

const FooterBottom = () => {
    return (
        <div className="footer-bottom-area mt-50">
            <div className="container">
                <div className="footer-bg-bottom">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="copyright">
                                <a href="https://www.facebook.com/sapotacorp"><i className="far fa-copyright"/> Copyright © SapotaCorp 2022. All right reserved.</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="footer-bottem-text text-md-right">
                                <p>Design By <a href="#">SapotaCorp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;