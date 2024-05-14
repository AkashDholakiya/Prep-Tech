import React, {  useEffect,useRef, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { VscDebugStart } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import Speech from 'react-speech';
import aiImage from '../img/ai_robot.svg'
import Person from '../img/person_with_ai.svg'
import talkCloud from '../img/talk_cloud.svg'
import '../css/ai_mock_inter.css'



// var counter = 0;

const Mockinter = () => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    // const divref = useRef(null);
    const speechRef = useRef(null);
    const [robot, setRobot] = useState(false);
    const [person, setPerson] = useState(false);
    const [splash, setSplash] = useState(true);
    const [counter, setCounter] = useState(3);
    const [text, setText] = useState('');
    const [res, setRes] = useState('');

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) { 
            return <span>Browser doesn't support speech recognition.</span>;
        }
 
        const Inter = setTimeout(() => {
            handleSubmit({ preventDefault: () => {} });
        }, 3000);


        if (transcript) {
            setText(...[transcript]);
            // setCounter(0);
            clearTimeout(Inter?.current);
            console.log(text);
        }
         

        return () => {
            clearTimeout(Inter);
        }
        // eslint-disable-next-line
    } , [transcript])


    useEffect(() => {
        const rsPlayButton = document.querySelector('.rs-play');
        rsPlayButton.id = 'rs-play';

        setTimeout(() => {
            setSplash(false);
        }, 3000);
        // eslint-disable-next-line 

        return () => {
            clearTimeout();
        }
    }, [])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(text);
        if(!text){
            return;
        }
        
        setRobot(true);
        setPerson(false);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/ai-call/ques`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message : text }),
        })
            
        const val = await res.json();
        let val2 = val.result
        val2 = val2.replace(/\*/g, '')
                       .replace(/\|/g, '')
                       .replace(/-/g, '');
        
        const wordPerMin = 150;
        const time = val2.split(' ').length / wordPerMin;
        const inSecond = time * 60 ;

        setRes(val2); 
        setText('');
        resetTranscript();

        setTimeout(() => {
            document.getElementById('rs-play').click();
        }, 1000);
        
        setTimeout(() => {
            setRobot(false);
            setPerson(true);
        }, inSecond * 1000);

    }

    const HandleStart = () => {
        SpeechRecognition.startListening({ continuous: true })
        setPerson(true)
    }

    if(splash){
        setTimeout(() => {
            setCounter(counter - 1);
        }, 1000);
    }
 
    return (
        <div className='d-flex justify-content-center align-items-center my-2 ai-main'>
            {splash && <>
                <h1>
                    Hold on We're loading this page in {counter} seconds
                </h1>   
            </>}
            <div className={`area p-3 ${splash && 'd-none'}`}> 
                <div className='d-none'> 
                    <Speech text={res} ref={speechRef} voice="Google UK English"/>
                </div> 
                <div className="btn-sec d-flex">
                    <button className="mx-1" onClick={() => {SpeechRecognition.stopListening(); setPerson(false)}}>Stop <IoMdClose /></button>
                    {/* <button className='mx-2' onClick={resetTranscript}>Reset <GrPowerReset /></button> */}
                    <button className="mx-1" onClick={HandleStart}>Start <VscDebugStart /></button>
                </div>
                {listening ? <span>🎙️</span> : <span>🛑</span>}
                <div className="d-flex justify-content-center">
                    <img style={{position:"absolute",top:"50px",left:"50px",transform:"rotate3d(0,1,1,-20deg) rotateX(30deg)"}} src={aiImage} alt="ai robot" width={350} height={350} />
                    <img style={{position:"absolute",bottom:"60px",right:"60px"}} src={Person} alt="Person" width={300} height={350} />
                    {person && <img className='animate-cloud rounded-circle' style={{bottom:"350px",right:"10px",position:"absolute",transform:"scaleX(1)"}} src={talkCloud} alt="talk cloud" width={100} height={100} />}
                    {robot && <img className='animate-cloud rounded-circle' style={{top:"50px",left:"40px",position:"absolute",transform:"scaleX(-1)"}} src={talkCloud} alt="talk cloud" width={100} height={100} />}
                </div>
            </div> 
        </div>
    )
}

export default Mockinter
