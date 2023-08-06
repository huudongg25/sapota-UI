import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import AboutMain from '../components/About/AboutMain';
import React, { useEffect } from 'react';
function AboutUs() {
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
        <main>
            <Header/>
            <AboutMain/>
            <Footer/>
        </main>
    </React.Fragment>
    );
}

export default AboutUs;