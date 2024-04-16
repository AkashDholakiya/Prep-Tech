import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
const Quiz = () => { 
    
    const [changer, setChanger] = useState(false);
    const [vlue,setvlue]=useState("");
    const content = ["Html", "Css", "JavaScript"]
    
    const onclickq = (val) =>{
        setChanger(!changer);
        setvlue(val);
    }
    return (
    <>
    <div>Quiz</div>
    {
        !changer ? 
        <div className='d-flex justify-content-center'>
            {content.map((val) => {
                    return (
                        <div className="row-md">
                            <div className="card" onClick={() => onclickq(val)}>
                                <div className="container1">
                                    <h3 className='con'><b>Quiz for {val}</b></h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
            :
            <div className='d-flex justify-content-center'>
                <div className='mx-2 mt-2'>
                    <button className='bt-html' onClick={() => setChanger(!changer)}><FaArrowLeft /></button>
                </div>
                <b>{vlue}Quiz</b>
            </div>
    }
    </>
    )
}

export default Quiz