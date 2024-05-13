import React, {  useEffect,useRef, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Form } from 'react-bootstrap'
import { VscDebugStart } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import Speech from 'react-speech';
import '../css/ai_mock_inter.css'



// var counter = 0;

const Mockinter = (props) => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const divref = useRef(null);
    const speechRef = useRef(null);
    const [text, setText] = useState('');
    const [res, setRes] = useState('');

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) { 
            return <span>Browser doesn't support speech recognition.</span>;
        }
        if (transcript) {
            setText(...[transcript]);
            console.log(text);
        }
         

        // eslint-disable-next-line
    } , [transcript])


    useEffect(() => {
        const rsPlayButton = document.querySelector('.rs-play');
        rsPlayButton.id = 'rs-play';


        // eslint-disable-next-line 
    }, [])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!text){
            return;
        }
        props.setLoader(true)
        
        const div = document.createElement('div');
        div.className = 'user-side';
        div.innerHTML = text;
        divref.current.appendChild(div);
        
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/ai-call/ques`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message : text }),
        })
            
        const val = await res.json();
        let val2 = val.result.replace("[Applicant Name]", "")
        val2 = val2.replace("*", "")
        val2 = val2.replace("|", "")
        val2 = val2.replace("-", "")
        console.log(val.result)

        setRes(val2); 
        setText('');
        resetTranscript();
        props.setLoader(false)
        const div2 = document.createElement('div');
        div2.className = 'ai-side';
        div2.innerHTML = val2;
        divref.current.appendChild(div2);

        setTimeout(() => {
            document.getElementById('rs-play').click();
        }, 1000);
        
    }

    return (
        <div className='d-flex justify-content-center align-items-center my-2 ai-main'>
            <div className='area p-3'> 
                <div className='d-none'> 
                    <Speech text={res} ref={speechRef} voice="Google UK English"/>
                </div> 
                <div className="btn-sec d-flex">
                    <button className="mx-1" onClick={SpeechRecognition.stopListening}>Stop <IoMdClose /></button>
                    {/* <button className='mx-2' onClick={resetTranscript}>Reset <GrPowerReset /></button> */}
                    <button className="mx-1" onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start <VscDebugStart /></button>
                </div>
                {listening ? <span>🎙️</span> : <span>🛑</span>}
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
