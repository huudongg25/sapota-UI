import React, { useEffect } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceManagementMain from '../components/ServiceManagement/ServiceManagementMain';
import Contact from '../components/Home/ContactSection';
import Video from '../components/Home/VideoSection';
import WebAppDevelopment from '../components/ServiceManagement/WebAppDevelopment';

function WebsiteAuditor() {
    const callback = entries => {
		entries.forEach(entry => {
		  const elementDistanceFromTop = entry.target.getBoundingClientRect().top;
		  if (
			elementDistanceFromTop <=
			(window.innerHeight || document.documentElement.clientHeight / 1.7)
		  ) {
			entry.target.style.animation = entry.target.dataset.animate;
		  } else {
			entry.target.style.animation = 'none';
		  }
		});
	  };

	useEffect(() => {
		let observer = new IntersectionObserver(callback);
	
		const animationItems = document.querySelectorAll('.animate');
	
		animationItems.forEach(item => {
		  observer.observe(item);
		});
	  }, []);
     
    return (
        <React.Fragment>
        <Header/>
        <main>
            <SiteBreadcrumb pageTitle="Web App Development"/>
            <WebAppDevelopment/>
            <Video />
            <Contact/>
        </main>
        <Footer/>
    </React.Fragment>
    );
}

export default WebsiteAuditor;

