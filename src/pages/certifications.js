import React, { Component } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import AboutMain from '../components/About/AboutMain';


class Certifications extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
            <Header />
            <main>
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb pageTitle="Certifications" />
            {/* breadcrumb-area-start */}
            {/* About Main */}
            <AboutMain />
            {/* About Main */}
            {/* brand-area-start */}
            {/*<Brand />*/}
            {/* brand-area-end */}
            </main>
            <Footer bgMode='dark' />


            </React.Fragment>

        );
    }
}

export default Certifications;