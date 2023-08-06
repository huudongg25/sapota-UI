import React, { Component } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceRequestAQuote from "../components/ServiceOne/ServiceRequestAQuote";


class RequestAQuote  extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Request A Quote" />
                    {/* breadcrumb-area-start */}
                    {/* About Main */}
                    <ServiceRequestAQuote />
                    {/* About Main */}
                    {/* brand-area-start */}
                    {/*<Brand />*/}
                    {/* brand-area-end */}
                </main>
                <Footer bgMode="dark" />
            </React.Fragment>

        );
    }
}


export default RequestAQuote;