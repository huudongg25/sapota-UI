function ItConsultancy() {
    return ( 
        <div className="block-chain-wrapper pt-130">
        <div className="container pb-130">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/IT consutant.jpg"
                  alt="sapota"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6  mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHAT WE DO</span>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}>
                  The growing popularity of modern technologies has fueled digital transformation and replicated the technological revolution in the new era. Grasping that trend,
                   <span className="text-main-color"> SapotaCorp</span> provides customers with quality IT consulting services that are suitable for their needs.
                  </p>
                  <p style={{ fontSize: 19 ,lineHeight:'1.6',marginTop:20}}><span className="text-main-color">SapotaCorp</span> helps financial businesses digitize,
                 promote technology activities through a technical platform to improve customer experience, create competitive advantages,
                 improve transparency, reduce operating costs and increase trust of partners and customers.</p>
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
                             <li>● Professional and experienced consulting team in IT field</li>
                            <li style={{marginTop:10}}>● Suggest ideas and measures to optimize and promote the effectiveness of customers' products and technologies</li>
                            <li style={{marginTop:10}}>● Optimize costs and bring the highest quality and satisfaction to customers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
                      <div className="about-2-img" style={{ width: "100%" }}>
                        <img
                          src="assets/img/sapota/sapota-img.jpg"
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

export default ItConsultancy;