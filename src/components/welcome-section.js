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
      <div className="welcome-container">
        <div className="welcome-content">
            <h1 className="welcome-text">Ragith's</h1>
            <h1 className="welcome-text">Mind</h1>
            <Lottie options={defaultOptions} height={100} width={400}/>
        </div>
      </div>
    )
}

export default WelcomeSection