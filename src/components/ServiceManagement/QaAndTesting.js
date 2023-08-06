function QAandTesting() {
    return ( 
        <div className="block-chain-wrapper pt-130">
        <div className="container pb-130">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pb-20  animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/QA & Testing.jpg"
                  alt="sapota"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6   mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHAT WE DO</span>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                  <span className="text-main-color">SapotaCorp</span> provides a wide range of independent system testing and QA services that comply
                 with the most stringent security and industry standards.
                 We can improve the quality of your product while reducing time-to-market,
                 management risks, and operating costs by utilizing our testing labs, QA expertise, and team flexibility.
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
              <div className="container pt-130">
                  <div className="row">
                  <div className="col-xl-5 col-lg-5 mb-30 animate " data-animate="slideInRight 1s">
                      <div className="about-1-wrapper">
                        <div className="about-text">
                          <span className="name-company">WHY CHOOSE US</span>
                          <ul style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                          <li>● Depending on your needs, we provide both automated and manual testing. Our engineers would collaborate closely with you to design the best approach for your systems</li>
                            <li style={{marginTop:10}}>● Ensure the satisfaction of customers and perfect communication</li>
                            <li style={{marginTop:10}}>● Cost-optimization and experts team members to ensure the quality and times to complete projects</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                      <div className="about-2-img" style={{ width: "100%" }}>
                        <img
                          src="assets/img/sapota/QA-testing.jpg"
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

export default QAandTesting;