import React, { useRef, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Form } from 'react-bootstrap'
import { GrPowerReset } from "react-icons/gr";
import { VscDebugStart } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import '../css/ai_mock_inter.css'

const Mockinter = (props) => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const divref = useRef(null);
    const [text, setText] = useState('');

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!text){
            alert('Text field should not be empty!');
            return;
        }
        props.setLoader(true)
        
        const div = document.createElement('div');
        div.className = 'user-side';
        div.innerHTML = text;
        divref.current.appendChild(div);
        
        const res = await fetch('http://localhost:4000/api/v1/ai-call/ques', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message : text }),
        })
            
        const val = await res.json();
        console.log(val);
        setText('');
        props.setLoader(false)
        const div2 = document.createElement('div');
        div2.className = 'ai-side';
        div2.innerHTML = val.result;
        divref.current.appendChild(div2);
    }

    return (
        <div className='d-flex justify-content-center align-items-center my-2 ai-main'>
            <div className='area p-3'>
                <div className="btn-sec d-flex">
                    <button onClick={SpeechRecognition.stopListening}>Stop <IoMdClose /></button>
                    <button className='mx-2' onClick={resetTranscript}>Reset <GrPowerReset /></button>
                    <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start <VscDebugStart /></button>
                </div>
                {/* {listening ? <span>🎙️</span> : <span>🛑</span>} */}
                <div ref={divref} className='main-inter-part my-3'>
                    {props.loader && <p>loading...</p>}
                </div>
                <Form className='form-sec d-flex' onSubmit={handleSubmit}>
                    <Form.Control placeholder="Enter question" value={text} onChange={(e) => {setText(e.target.value)}} />
                    <button type="submit">&#8593;</button>
                </Form>
            </div>
        </div>
    )
}

export default Mockinter
