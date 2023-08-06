import React from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';

class Index extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Header/>
                <HomeMain/>
                <Footer/>
            </React.Fragment>
        );
    }
}


export default Index;

