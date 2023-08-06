import React from "react";
import {Accordion} from 'react-bootstrap';

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemPanel,
//     AccordionItemButton,
// } from 'react-accessible-accordion';

let data = [
    {
        title: 'Flexible resources',
        content: 'Hire our experts hourly and daily, in addition to hiring a team for the whole project.',
    },
    {
        title: 'Customization',
        content: 'Hire the most ideal developers for your requirements to develop your own projects.'
    },
    {
        title: 'Easy Project Management',
        content: 'We provide free project management tools to track and manage the team.'
    },
    {
        title: 'Review after the project',
        content: 'Closely follow the project and support even after it is put into operation.'
    },
    {
        title: 'Code system is sustainable',
        content: 'Code system ensures standards of security and performance.'
    },
]
const AccordionDefault = () => {

    return (
        <div className="accordion_certificate">
            {/*<Accordion defaultActiveKey="0">*/}
              <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                            <span>Flexible resources</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Hire our experts hourly and daily, in addition to hiring a team for the whole project.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span>Customization</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                         Hire the most ideal developers for your requirements to develop your own projects.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                       <span>Easy Project Management</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                         We provide free project management tools to track and manage the team.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span>Review after the project</span>

                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Closely follow the project and support even after it is put into operation.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <span>Code system is sustainable</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                         Code system ensures standards of security and performance.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )

}

export default AccordionDefault;





