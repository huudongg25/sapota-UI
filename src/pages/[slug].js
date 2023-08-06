import React from 'react';
import Header from '../components/LayoutView/Header/Header';
import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
import FooterStyleTwo from '../components/LayoutView/Footer/FooterStyleTwo';

class Blog extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* Blog Main */}
                    <BlogDetailsMain />
                    {/* Blog Main End */}
                </main>
                <FooterStyleTwo />
            </React.Fragment>
        );
    }
}


export default Blog;

