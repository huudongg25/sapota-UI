import React, { Component } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import ContactsMain from '../components/Contact/ContactsMain';


class CaseThree extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Contacts" />
                    {/* breadcrumb-area-start */}
                    {/* Faq */}
                    <ContactsMain />
                    {/* Faq */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}


export default CaseThree;