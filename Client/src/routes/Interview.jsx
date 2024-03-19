import React from 'react'
import AiSvg from '../img/artificial-intelligence-ai-icon.svg'
import '../css/interview_section.css'

const Interview = () => {
  return (
    <div>
      <h1 className='inter-head my-3'>Interview</h1>
      <div className="selection-inter">
        <div className="ai-part">
            <img src={AiSvg} alt="ai_image" />
        </div>
        <div className="p2p-part">

        </div>
      </div>
    </div>
  )
}

export default Interview
