import React from "react";

const dataOffice = [
    {
        position: 'SINGAPORE',
        name: 'Singapore',
        address: '23 Faber Green Faber Hills Singapore 129274',
        phone: '(+65) 90049445',
        linkImg: 'url(assets/img/sapota/office-img/office-singapore.jpg)'
    },
    {
        position: 'KOREA',
        name: 'Seoul',
        address: '10rd floor Samsung Leaders Tower, 286 Beotkkot-ro, Geumcheon-gu, Seoul, Republic of Korea',
        phone: ' +(82) 2 2038 3136,',
        linkImg: 'url(assets/img/sapota/office-img/office-korea.jpg)'
    },
    {
        position: 'VIET NAM',
        name: 'Ha Noi',
        address: '94 Phuong Liet, Thanh Xuan, Ha Noi, Viet Nam',
        phone: '(+84) 38 339 6560',
        linkImg: 'url(assets/img/sapota/office-img/office-hanoi.jpg)'
    },
    {
        position: 'VIET NAM',
        name: 'Da Nang',
        address: '101 Huynh Tan Phat, Hai Chau, Da Nang, Viet Nam',
        phone: '(+84) 38 339 6560',
        linkImg: 'url(assets/img/sapota/office-img/office-danang.jpg)'
    },


]

const OfficeCompany = () => {


    return (
        <div className="container officeMain">
            <div className="section-title text-center ml-50 mr-50 animate"  data-animate="slideInBottom 2s">
                <span className="border-left-1"/>
                <span>Global Presence</span>
                <span className="border-right-1"/>
                <h1>We have 4 offices in <br></br> Singapore, Korea and Vietnam</h1>
                <p style={{fontSize:18}}>We have 4 offices globally including VietNam, Singapore and Korea.
                 We aim to continue expand our global presence to provide 24/7 IT outsourcing service to customers worldwide</p>
            </div>

            {/*<div className="section-heading section-heading--black">Our offices</div>*/}
            <div className="grid">
                {
                    dataOffice.map((item, index) => {
                        return (
                            <div key={index} className="office animate" data-animate="slideInTop 2s" style={{backgroundImage: item.linkImg}}>
                                <div className="office__backdrop"/>
                                <div className="office__content">
                                    <div className="office__content__country">{item.position}</div>
                                    <div className="office__content__city">{item.name}</div>
                                    <div className="divide-line"/>
                                    <div className="office__content__address">{item.address}
                                    </div>
                                    <div className="office__content__tel">{item.phone}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default OfficeCompany;
