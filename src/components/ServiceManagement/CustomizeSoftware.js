function CustomizeSoftware() {
    return ( 
        <div className="block-chain-wrapper pt-130">
        <div className="container pb-130">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/Customize software.jpg"
                  alt="sapota"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHAT WE DO</span>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                  <span className="text-main-color">SapotaCorp</span> provides an up-to-date and flexible platform and software with many features that improve the shopping experience without too much human intervention.
                 The powerful platform will provide complete information,
                 shopping filters, fast response, safety, and information storage on the operating system.
                  </p>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>One of Sapota's strengths is building optimized back-end and front-end systems for processes depending on needs and business models.
                 Therefore, Sapota committee delivers fully quality products to the demands of every customer. </p>
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
                          <li>● Build the optimal system and customize software for customer’s needs</li>
                            <li style={{marginTop:10}}>● Our extensive knowledge and skills include cutting-edge technology, platforms, and languages to ensure that each qualified software development project is built</li>
                            <li style={{marginTop:10}}>● Committed to deadline and optimize the cost</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                      <div className="about-2-img" style={{ width: "100%" }}>
                        <img
                          src="assets/img/sapota/newAbout2.jpg"
                          style={{borderRadius:8,boxShadow:'2px 3px 5px #333'}}
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

export default CustomizeSoftware;