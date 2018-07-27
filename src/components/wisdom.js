import React from 'react';
import Psalms from './psalms';
import Proverbs from './proverbs';
import Ecclesiastes from './ecclesiastes'

function Wisdom(props) {
    return (
        <div className="wisdom-container">
            <div>
                <Psalms/>
                <div className="divider-wisdom-container">
                    <div className="divider-wisdom"></div>
                </div>
                <Proverbs/>
                <div className="divider-wisdom-container">
                    <div className="divider-wisdom"></div>
                </div>
                <Ecclesiastes/>
            </div>
        </div>
    )
}

export default Wisdom

