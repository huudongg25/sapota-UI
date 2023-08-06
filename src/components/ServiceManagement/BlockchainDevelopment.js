function BlockchainDevelopment() {
  const listSolution1 = [
    "Build NFTs Market Place",
    "Build Smart Contract",
    "Cross-Chain / Side Chain",
    "Build Blockchain Bridges",
    "Build Blockchain Wallet",
    "Build Defi / Defi 2.0",
  ]
  const listSolution2 = [
    "DAO / Stalking / Farm",
    "Private Blockchain",
    "Game Development",
    "Launchpad Platform",
    "Build Exchange",
    "Build Teamlab Blockchain",
  ]

  const techBlockChain = [
    "assets/img/sapota/tech-blockchain/1.png",
    "assets/img/sapota/tech-blockchain/2.png",
    "assets/img/sapota/tech-blockchain/3.png",
    "assets/img/sapota/tech-blockchain/4_updated.png",
    "assets/img/sapota/tech-blockchain/5.png",
    "assets/img/sapota/tech-blockchain/6.png",
  ]


  return (
    <div className="block-chain-wrapper pt-130">
      <div className="container pb-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
            <div className="about-2-img" style={{ width: "100%" }}>
              <img
                src="assets/img/sapota/blockchain.jpg"
                alt="sapota"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6  mb-30 animate " data-animate="slideInRight 1s">
            <div className="about-1-wrapper">
              <div className="about-text">
                <span className="name-company">WHAT WE DO</span>
                <p style={{ fontSize: 19, lineHeight: '1.6', marginTop: 20 }}>
                  <span className="text-main-color">SapotaCorp</span> has strong experiences in developing blockchain products by Blockchain-based game, Crypto Wallet, NFT marketplace,... by fast update, advanced technologies and optimize cost consumptions for effective blockchain products for all.
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

      <div className="pb-130" style={{ backgroundImage: "url('assets/img/bg/bg-1.jpg')" }}>
        <div className="container">
          <div className="row pt-130">
            <div className="col-xl-5 col-lg-5 mb-30 animate " data-animate="slideInRight 1s">
              <div className="about-1-wrapper">
                <div className="about-text">
                  <span className="name-company">WHY CHOOSE US</span>
                  <ul style={{ fontSize: 19, lineHeight: '1.6', marginTop: 20 }}>
                    <li>● High experiences of blockchain field and bring ideas into reality</li>
                    <li style={{ marginTop: 10 }}>● Cost-optimization and experts team members to ensure the quality and times to complete projects</li>
                    <li style={{ marginTop: 10 }}>● 100+ projects worldwide</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 animate" data-animate="slideInLeft 1s">
              <div className="about-2-img" style={{ width: "100%" }}>
                <img
                  src="assets/img/sapota/slider/img-slider-2.jpg"
                  style={{ borderRadius: 8, boxShadow: '0 2px 4px #333' }}
                  alt="sapota"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-100 pb-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6 pb-20 animate" data-animate="slideInLeft 1s">
            <div className="about-2-img" style={{ width: "100%" }}>
              <img
                src="assets/img/sapota/tech-blockchain/blockchain portfolio.png"
                alt="sapota"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6  mb-30 animate " data-animate="slideInRight 1s">
            <div className="about-1-wrapper">
              <div className="about-text">
                <span className="name-company">OUR
                  BLOCKCHAIN
                  SOLUTION</span>
                <div className="row mt-30">
                  <ul className="col-6">
                      {listSolution1.map((item,index)=>{
                        return <li className="item-solution" key={index}>• {item}</li>
                      })}
                  </ul>
                  <ul className="col-6 ">
                      {listSolution2.map((item,index)=>{
                        return <li className="item-solution" key={index}>• {item}</li>
                      })}
                  </ul>
                </div>
              </div>
              {/* <div className="about-button">
                                      <a className="btn" href="/request-a-quote"><span
                                          className="btn-text">JOIN WITH US <i><FontAwesomeIcon
                                          icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                  </div> */}
            </div>
          </div>
        </div>
        <div className="pt-100 row animate tech-group" data-animate="slideInBottom 1s">
            {techBlockChain.map((item,index)=>{
              return <img  src={item} key={index} className="col-xl-2 col-lg-2 col-sm-4 tech-icon "/>
            })}
        </div>
      </div>
    </div>
  );
}

export default BlockchainDevelopment;