import React, { Component } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import FaqMain from '../components/Faq/FaqMain';


class CaseThree extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="FAQ’s" />
                    {/* breadcrumb-area-start */}
                    {/* Faq */}
                    <FaqMain />
                    {/* Faq */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}


export default CaseThree;