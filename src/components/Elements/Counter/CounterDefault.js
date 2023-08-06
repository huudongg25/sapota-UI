import React, {useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const CounterDefault = () => {

    const [isViewCount, setIsViewCount] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    function convertNumber(val) {
        let arr = []
        String(val).split('').reverse().forEach((item, index) => {
            if ((index + 1) % 3 === 0) {
                arr.push(item);
                arr.push('.');
            } else {
                arr.push(item)
            }
        })
        return arr.reverse().join('')
    }

    const counters = [
        {
            countIcon: 'fal fa-users',
            countIconPrefix: '',
            countNum: 10,
            countTitle: 'Year operation'
        },
        {
            countIcon: 'fal fa-heart',
            countIconPrefix: '',
            countNum: 200,
            countTitle: 'Employees'
        },
        {
            countIcon: 'fal fa-box-check',
            countIconPrefix: '',
            countNum: 4,
            countTitle: 'Global offices'
        },
        {
            countIcon: 'fal fa-money-check-edit',
            countIconPrefix: '',
            countNum: 1300,
            countTitle: 'Projects'
        },
        {
            countIcon: 'fal fa-globe',
            countIconPrefix: '',
            countNum: 58,
            countTitle: 'Countries'
        },
    ];

    return (
        <div className="counter-area pt-130 pb-100" style={{backgroundImage: 'url(assets/img/bg/bg-3.jpg)'}}>
            <div className="container">
                {counters &&
                <div className="fix-respone d-flex justify-content-between w-100">
                    {counters.map((counter, num) => (
                        <div key={num} >
                            <div className="counter-wrapper mb-30 animate" data-animate="scaleUpCenter 0.5s">
                                <div className="counter-icon">
                                    {/*<i><FontAwesomeIcon icon={[counter.countIconPrefix, counter.countIcon]} /></i>*/}
                                    <i className={[counter.countIcon]}/>
                                </div>
                                <div className="counter-text">
                                    <h1><span className="counter">
                                {/*<VisibilitySensor onChange={onVisibilityChange} offset={{top:0}} delayedCall={true}>*/}
                                        {/*    <CountUp separator='.'  end={!isViewCount ? counter.countNum : 0} />*/}
                                        {/*</VisibilitySensor>*/}
                                <CountUp separator='.'  start={focus ? 0 : null} end={counter.countNum} duration={4} redraw={true}>
                                             {({countUpRef}) => (
                                         <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) {
                                                setFocus(true);
                                             }
                                              }}>
                                          <span ref={countUpRef}/>
                                   </VisibilitySensor>
                                       )}
                                    </CountUp>
                                </span><span className="plus-icon">+</span></h1>
                                    <p>{counter.countTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}
export default CounterDefault;
