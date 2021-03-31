import React from 'react'

import SubActivity from './subActivity'
import diamond from '../Images/diamond.svg'
import error from '../Images/error.svg'
import check from '../Images/check.svg'
import x from '../Images/x.svg'
const Activity = () => {
    return (
        <div className="activity__">
            <h3>Activity</h3>
            <div className="recent__a">
                <SubActivity title="Moeny Recied " img={check} desc="Home workout is with arun" price="20"/>
                <SubActivity title="Money Paid " img={x} desc="Hello this is Arun" price="40"/>
                <SubActivity title="From Mom " img={x} desc="The next generation of our icon library + toolkit is coming with" price="10"/>
            </div>
        </div>
    )
}

export default Activity
