import React, { useState } from 'react'
import Aisvg from '../img/Aisvg'
import P2psvg from '../img/P2psvg'
import '../css/interview_section.css'
import { useNavigate } from 'react-router-dom'

const Interview = () => {
  const navigate = useNavigate()
  const [p2pcolor, setP2pcolor] = useState('white')

  const HandleAiMouse = () => {
    document.getElementById('ai_path').style.fill = 'purple';
    document.getElementById('ai_path').style.transition = '0.5s';
    document.getElementById('ai_path').style.stroke = 'white';
  }
  const HandleAiMouseOut = () => {
    document.getElementById('ai_path').style.fill = 'white';
    document.getElementById('ai_path').style.stroke = 'white';
  } 
  
  const HandleP2pMouse = () => {
    setP2pcolor('purple')
    document.querySelectorAll('.p2p_path').forEach((path) => {
      path.style.fill = 'purple';
      path.style.transition = '0.5s';
      path.style.stroke = 'white';
    })
  }

  const HandleP2pMouseOut = () => {
    setP2pcolor('white')
    document.querySelectorAll('.p2p_path').forEach((path) => {
      path.style.fill = 'white';
      path.style.stroke = 'white';
    })
  }

  return (
    <div>
      <h1 className='inter-head my-3'>Interview</h1>
      <div className="selection-inter">
        <div className="ai-part" onClick={() => navigate('ai-inter')}>
            <div className='ai-svg' onMouseOver={HandleAiMouse} onMouseOut={HandleAiMouseOut}>
              <Aisvg />
            </div>  
        </div>
        <div className="p2p-part" onClick={() => navigate('p2p-inter')}>
            <div className='p2p-svg' onMouseOver={HandleP2pMouse} onMouseOut={HandleP2pMouseOut}>
              <P2psvg p2pcolor={p2pcolor}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Interview
