import React from 'react';
import Header from '../components/LayoutView/Header/Header';
import BlogMain from '../components/Blog/BlogMain';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import FooterStyleTwo from '../components/LayoutView/Footer/FooterStyleTwo';
import Footer from '../components/LayoutView/Footer/Footer';
import Blog from '../components/Home/BlogSection'

class BlogPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <main>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb pageTitle="Blog" />
                {/* breadcrumb-area-start */}
                <Blog/>
                {/* Blog Main */}
                {/* Blog Main End */}
            </main>
            {/* <FooterStyleTwo /> */}
            <Footer />
            </React.Fragment>
        );
    }
}


export default BlogPage;

