import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../images/brain.json'

import "./welcome-section.css"

const WelcomeSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="index-content">
            <h1>Ragith's</h1>
            <h1>Mind</h1>
            <Lottie style={{width: "fit-content"}} options={defaultOptions} height={100} width={400}/>
        </div>
    )
}

export default WelcomeSection