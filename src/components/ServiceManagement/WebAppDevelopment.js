function WebAppDevelopment() {
    return ( 
        <div className="block-chain-wrapper pt-130">
        <div className="container pb-130">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/webDevelopment.jpg"
                  style={{borderRadius:8,boxShadow:'0 2px 4px #333'}}
                  alt="sapota"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHAT WE DO</span>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                     With more 300+ projects, <span className="text-main-color">SapotaCorp</span> confident to creating flexible,
                     specializes in both front-end and back-end solutions for web applications for customers.
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
                  <div className="col-xl-5 col-lg-5  mb-30 animate" data-animate="slideInRight 1s">
                      <div className="about-1-wrapper">
                        <div className="about-text">
                          <span className="name-company">WHY CHOOSE US</span>
                          <ul style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                          <li>● Updating on date with technologies includes Laravel, .NET, Java, PHP, Angular, ReactJS,..</li>
                            <li style={{marginTop:10}}>● Optimize the cost effectiveness and web performances</li>
                            <li style={{marginTop:10}}>● Experts dev teams of the technologies</li>
                            <li style={{marginTop:10}}>● Deliver personalized for products and services for you</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                      <div className="about-2-img" style={{ width: "100%" }}>
                        <img
                          src="assets/img/sapota/slider/img-slider-3.jpg"
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

export default WebAppDevelopment;