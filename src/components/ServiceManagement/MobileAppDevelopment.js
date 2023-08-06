function MobileAppDevelopment() {
    return ( 
        <div className="block-chain-wrapper pt-130">
        <div className="container pb-130">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/mobileDevelopment.jpg"
                  style={{borderRadius:8,boxShadow:'0 2px 4px #333'}}
                  alt="sapota"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 m mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHAT WE DO</span>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                  By experienced and expert devs team, <span className="text-main-color">SapotaCorp</span> provides best mobile development services that deliver
                smooth mobile app experiences for digital consumers across all devices
                  that are well-designed, practical, and cross-platform.
                  </p>
                </div>
                {/* <div className="about-button">
                                      <a className="btn" href="/request-a-quote"><span
                                          className="btn-text">JOIN WITH US <i><FontAwesomeIcon
                                          icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                  </div> */}
              </div>
            </div>
          </div>
          </div>
          
         <div className="pb-130" style={{backgroundImage:"url('assets/img/bg/bg-1.jpg')"}}>
              <div className="container">
                  <div className="row pt-130">
                  <div className="col-xl-5 col-lg-5  mb-30 animate " data-animate="slideInRight 1s">
                      <div className="about-1-wrapper">
                        <div className="about-text">
                          <span className="name-company">WHY CHOOSE US</span>
                          <ul style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                          <li>● Building and have deep knowledge of mobile applications</li>
                            <li style={{marginTop:10}}>● Active team to and committed to deadline</li>
                            <li style={{marginTop:10}}>● Support within 24 hours, including emergency and hot-fix for projects</li>
                            <li style={{marginTop:10}}>● Ensure the satisfaction of customers and perfect communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                      <div className="about-2-img" style={{ width: "100%" }}>
                        <img
                          src="assets/img/sapota/newAbout.jpg"
                          style={{borderRadius:8,boxShadow:'0 2px 4px #333'}}
                          alt="sapota"
                        />
                      </div>
                    </div>
                  </div>
              </div>
         </div>
      </div>
        );
}

export default MobileAppDevelopment;