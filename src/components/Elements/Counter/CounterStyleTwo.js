import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CounterDefault = () => {

    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    const counters = [
        {
            countIcon: 'check-square',
            countIconPrefix: 'fas',
            countNum: 1200,
            countTitle: 'Project Completed'
        },
        {
            countIcon: 'heart',
            countIconPrefix: 'fas',
            countNum: 58,
            countTitle: 'Happy Clients'
        },
        {
            countIcon: 'users',
            countIconPrefix: 'fas',
            countNum : 200,
            countTitle: 'Members'
        },
        {
            countIcon: 'trophy',
            countIconPrefix: 'fas',
            countNum : 10,
            countTitle: 'IT Consultant'
        }

    ];

    return(
        <div className="counter-area pb-100">
            <div className="container">
                {counters &&
                <div className="row">
                    {counters.map( (counter, num) => (
                    <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                            <div className="counter-wrapper single-counter mb-30">
                            <div className="counter-icon">
                                <i><FontAwesomeIcon icon={[counter.countIconPrefix, counter.countIcon]} /></i>
                            </div>
                            <div className="counter-text">
                                <h1 ><span className="counter">
                                <VisibilitySensor onChange={onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={!isViewCount ? counter.countNum : 0} />
                                </VisibilitySensor>
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