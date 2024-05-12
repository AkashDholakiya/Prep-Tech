import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Container,Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { LuCopy } from "react-icons/lu";
import Peer from 'simple-peer'
import io from 'socket.io-client'
import '../css/p2p_inter.css'
import { MdOutlineCallEnd } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

let socket;

const P2PInter = () => {
  const [me, setMe] = useState('')
  const [stream, setStream] = useState()
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callerName, setCallerName] = useState('')
  const [callerSignal, setCallerSignal] = useState()
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState('')
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState(localStorage.getItem('username'))
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
 
  const myVideo = useRef()
  const userVideo = useRef()  
  const connectionRef = useRef()

  useLayoutEffect(() => {
    socket = io.connect(process.env.REACT_APP_BACKEND_URL)
  }, [])


  useEffect(() => {  
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream)
      myVideo.current.srcObject = stream
    }).catch((err) => {
      alert("camera or audio permission denied")
      navigate("../interview")
    });

    socket.on('me', (id) => {
      setMe(id)
    })

    socket.on('callUser', (data) => {
      setReceivingCall(true)
      setName(data.name)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    socket.on('callAccepted', (signal) => {
      setCallerName(signal.callerName)
    })

    socket.on('callEnded', () => {
      setCallEnded(true)
      window.location.reload()
      } 
    )

    // eslint-disable-next-line
  }, [])

    const callUser = (id) => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      })

      peer.on('signal', (data) => {
        socket.emit('callUser', {
          userToCall: id,
          signalData: data,
          from: me,
          name: name,
        })
      })

      peer.on('stream', (stream) => {
        userVideo.current.srcObject = stream
      })

      socket.on('callAccepted', (signal) => {
        setCallAccepted(true)
        peer.signal(signal.signal)
      })

      connectionRef.current = peer
  }
 
  const answerCall = () => {
    setCallAccepted(true)
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    })

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller, callerName: localStorage.getItem('username') })
    })

    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream
    })

    peer.signal(callerSignal)

    connectionRef.current = peer
  }

  const leaveCall = () => {
    socket.emit('callEnded')
  }

  const HandleMail = (e) => {
    e.preventDefault();
    if(me === ''){
      alert("ID not found reload the page")
    }
    const email = e.target[0].value;
    const data = {
      username : localStorage.getItem('username'),
      email: email,
      id: me
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/sendmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if(res.status === 200){
        alert("Mail Sent Successfully")
      }else{
        alert("Something went wrong")
      }
    })
  }

  return (
    <Container className={`${!callAccepted ? "p2p-main" : 'p2p-while-call'}`}>
      <div className={`${callAccepted ? "after-call-vid" : 'video-section'}`}>
        <div className={`${callAccepted ? "oncall-curr" : ''}`} style={{ position: 'relative' }}>
          <video className="main-user-vid" playsInline muted ref={myVideo} autoPlay style={{ width: '800px',transform:"scaleX(-1)",marginRight:"1vw", borderRadius:"20px"}} />
          <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius:"20px" }}>
            {localStorage.getItem('username')}
          </div>
        </div>
        {caller !== '' ? 
          (callAccepted && !callEnded) && (
            <div className={`${callAccepted ? "oncall-opp" : ''}`} style={{ position: 'relative' }}>
              <video playsInline ref={userVideo} autoPlay style={{ width: '500px',transform:"scaleX(-1)" }} />
              <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius:"20px" }}>
                {name}
              </div>  
            </div>
          )
          : (callAccepted && !callEnded) && (
            <div className={`${callAccepted ? "oncall-opp" : ''}`} style={{ position: 'relative' }}>
              <video playsInline ref={userVideo} autoPlay style={{ width: '500px',transform:"scaleX(-1)" }} />
              <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius:"20px" }}>
                {callerName}
              </div>  
            </div>
          )  
        }
      </div>

      <div className={`${callAccepted ? "after-call-section" : 'call-section'}`}>
        {!callAccepted && localStorage.getItem("role") === "Student" && 
        <div> 
          <h3 className='my-3'>Enter ID here</h3>
          <div className="d-flex">
            <input type='text' className='mx-2 form-control' value={idToCall} onChange={(e) => 
              setIdToCall(e.target.value)} />
            <button className='ai-button btn-primary' onClick={() => callUser(idToCall)}>Call</button>
          </div>
        </div>}
        <div className='my-5'>
          {!receivingCall && localStorage.getItem("role") === "Interviewer" && 
          <div className='d-flex flex-column align-items-center p-5 w-100'>
          <div className='mail-to-candidate'>
              <Form onSubmit={HandleMail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='blockquote'>Mail to the candidate</Form.Label>
                  <Form.Control type="email" name='email' onChange={(e) => setEmail(e.target.value)}  value={email} placeholder="Enter email" />
                </Form.Group>
                <Button style={{width:"80px",height:"40px",fontSize:"18px"}} variant="primary" type="submit">
                  Send
                </Button>
              </Form>
          </div>
          <h3 className='my-5'>OR</h3>
          <div className='call-id-section'>
            {me ? me : "ID not found reload the page"}
            <button className='mx-2 id-btn' onClick={() => {
              navigator.clipboard.writeText(me)
              alert('Copied to clipboard')
            }}><LuCopy /></button>
          </div>
          </div>}
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='p-5 display-6'>{name} is calling...</h2>
              <Button onClick={answerCall}>Answer</Button>
            </div>
          ) : null}
        </div>
        {callAccepted && !callEnded ? (
        <div className='end-call-sec'>
            <button className='call-end' onClick={leaveCall}><MdOutlineCallEnd className='call-icon' /></button>
        </div>
        ) : null}
      </div>
    </Container>
  )
}

export default P2PInter
