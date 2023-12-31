import React, { Component } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import CareerMain from '../components/Career/CareerMain';


class Career extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Career" />
                    {/* breadcrumb-area-start */}
                    {/* Career */}
                    <CareerMain />
                    {/* Career */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}


export default Career;