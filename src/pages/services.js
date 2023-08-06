import React, { useEffect } from 'react';
import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceManagementMain from '../components/ServiceManagement/ServiceManagementMain';


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
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb pageTitle="We provide exclusive services for your business"/>
            {/* breadcrumb-area-start */}
            {/* About Main */}
            <ServiceManagementMain/>
            {/* About Main */}
            {/* brand-area-start */}
            {/*<Brand />*/}
            {/* brand-area-end */}
        </main>
        <Footer bgMode='dark'/>
    </React.Fragment>
    );
}

export default WebsiteAuditor;

