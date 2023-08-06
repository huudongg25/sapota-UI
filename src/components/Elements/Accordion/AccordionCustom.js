import React from "react";
import {Accordion} from 'react-bootstrap';

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemPanel,
//     AccordionItemButton,
// } from 'react-accessible-accordion';

let data1 = [
    {
        title: 'Client',
        content: [
            `Turkey's client`,
            `August 2, 2021.`
        ]

    },
    {
        title: 'Technology',
        content: [
            `Sanapos payment gateway`,
            `.NET Framework`,
            `LinQ`,
            `WebForm`
        ]
    },
    {
        title: 'What we have done?',
        content: [
            `WMulti vendor feature like buy, sell product, follow buyer`,
            `Each user will have a digital wallet`,
            `They can create an auction and bid`,
            `Instant notification based on a lot of events`
        ]
    }
]
let data2 = [
    {
        title: 'Client',
        content: [
            `Hongkong's client.`,
            `July 14, 2021.`
        ]

    },
    {
        title: 'Technology',
        content: [
            `PHP 7.2.30/ Laravel Framework 5.7.29.`,
            `Blade Template laravel/Jquery.`,
            `CMS Templates Grupo Chat Pro.`,
        ]
    },
    {
        title: 'What we have done?',
        content: [
            `Website have functions same freelancer. User post job call is Seeker. User bid project call is Alchemist.`,
            `Seeker will get point when project done and release milestone.`,
            `Alchemist will up level when he done project and collect good review from Seeker. Level base on point.`,
            `User can post article, video, images, files, status.`
        ]
    }
]
let data3 = [
    {
        title: 'Client',
        content: [
            `Korean's client.`,
            `June 8, 2021.`
        ]

    },
    {
        title: 'Technology',
        content: [
            `.NET Core 3.1 to supply API on website/admin panel.`,
            `Blade Template laravel/Jquery.`,
            `React Native to make mobile apps.`,
            `React for website/admin panel.`
        ]
    },
    {
        title: 'What we have done?',
        content: [
            `User can create addresses, send, and receive TRC20 tokens/ TRX.`,
            `Show history of transaction and support filter by , 1 month, 3 months, 6 months and filter by only sending, only receiving.`,
            `Integrate tokencan.co to get exchange rate between TRC20 token and USDT.`,
            `User can see balance, how many tokens/coins are in hold and quality for each.`,
            `Admin can post notices.`
        ]
    }
]
let data4 = [
    {
        title: 'Specialization Benefits',
        content: [
            `Based on your requirements, you can hire developers that are most ideal for your requirements.`,
        ]

    },
    {
        title: 'Happy Customers',
        content: [
            `We have over 1164+ Happy Customers located in the USA, Australia, UK, Canada, and more than 58+ other countries.`,
        ]
    },
    {
        title: 'No Setup Fees',
        content: [
            `Our services are offered without any setup fee. You only pay for the work done.`,
        ]
    }
]
let dataNeed = []
let indexAcc = 0;
const AccordionCustom = (props) => {
    const { mode } = props;
    switch (mode){
        case 1:
            dataNeed = data1;
            break
        case 2:
            dataNeed = data2;
            break
        case 3:
            dataNeed = data3;
            break
        case 4:
            dataNeed = data4;
            break
        default:
            dataNeed = data1;
            break
    }
    return (
        <div className="accordion_certificate">
            <Accordion>
            {/*<Accordion defaultActiveKey={indexAcc}>*/}
                {
                    dataNeed.map((item, index) =>{
                        return (
                            <Accordion.Item key={index} eventKey={index}>
                                <Accordion.Header>
                                    <span>{item.title}</span>
                                </Accordion.Header>
                                <Accordion.Body>

                                        <ul>
                                            {
                                                [...item.content].map((item1, index1) => {
                                                    return (
                                                        <li key={index1}>{item1}</li>
                                                    )

                                                })
                                            }
                                        </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }

            </Accordion>
        </div>

    )

}

export default AccordionCustom;





