import React from 'react';
import Featurebox from'./Featurebox';
import figure1 from '../images/1.svg';
import figure2 from '../images/2.svg';
import figure3 from '../images/3.svg';
import figure4 from '../images/4.svg';
function Feature() {
    return (
        <div id='features'>
            <h1>FATURES</h1>
            <div className='a-container'>
                <Featurebox image={figure1} title="WeightLifting"/>
                <Featurebox image={figure2} title="Specific Muscle"/>
                <Featurebox image={figure3} title="Flex Your Muscle"/>
                <Featurebox image={figure4} title="Cardio Exercise"/>
            </div>
            
        </div>
    )
}

export default Feature
