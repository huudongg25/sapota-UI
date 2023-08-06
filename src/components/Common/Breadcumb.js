import React from "react";
import Link from "next/link";

const SiteBreadcrumb = (props) => {
  const { pageTitle } = props;
  return (
    <div
      className="breadcrumb-area bg-bred breadcrumb-spacing"
      style={{
        backgroundImage: "url(assets/img/sapota/bg/bg-contact-us_rz.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center">
              <h1 className="animate" data-animate="slideInRight 2s">{pageTitle ? pageTitle : "Blog"}</h1>
              {pageTitle ===
              "Blog" ? (
                <p style={{ fontSize: 20, color: "#fff" }} className="animate"  data-animate="slideInLeft 2s">
                 The Trusted IT Partner for Your Business
                </p>
              ) : null}
              {pageTitle ===
              "We provide exclusive services for your business" ? (
                <p style={{ fontSize: 20, color: "#fff" }} className="animate"  data-animate="slideInLeft 2s">
                  SapotaCorp assisted enterprises in elevating their values
                  through blockchain development, web app development, mobile
                  app development, custom software development, IT consultancy,
                  QA, and testing services
                </p>
              ) : null}
              {pageTitle ===
              "Blockchain Development" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
                 We bring the best-in-class blockchain solutions to startups and enterprises to seize the future economy
                </p>
              ) : null}
			   {pageTitle ===
              	"Web App Development" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
                Web - Mobile Development Service helps create based software and ensures a great user experience
                </p>
              ) : null}
			 {pageTitle ===
              	"Mobile App Development" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
                Create new custom software solutions, improve existing solutions, and modernize legacy systems
                </p>
              ) : null}
			  {pageTitle ===
              	"Customize Software" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
                Create new custom software solutions, improve existing solutions, and modernize legacy systems
                </p>
              ) : null}
			  {pageTitle ===
              	"IT Consultancy" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
                Improve the performance competitiveness through the right technology enablement and usage 
                </p>
              ) : null}
			  {pageTitle ===
              	"QA & Testing" ? (
                <p style={{ fontSize: 22, color: "#fff",marginTop:30,paddingBottom:80 }} className="animate"  data-animate="slideInLeft 2s">
               	 Provide QA & software testing services to fulfill all quality and testing needs
                </p>
              ) : null}
              {/* <ul className="breadcrumb-menu">
	                        <li><Link href="/" as="/"><a>Home</a></Link></	li>
	                        <li><span>{ pageTitle ? pageTitle : 'Blog'}</span></li>
	                    </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBreadcrumb;
