import React, { useEffect, useRef, useState } from 'react'
import { Container,Button } from 'react-bootstrap'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import '../css/p2p_inter.css'
import { useNavigate } from 'react-router-dom'

const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`)

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
  const navigate = useNavigate();
 
  const myVideo = useRef()
  const userVideo = useRef()  
  const connectionRef = useRef()

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
      console.log("callUser",data)
      setName(data.name)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    socket.on('callAccepted', (signal) => {
      setCallerName(signal.callerName)
    })

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
    setCallEnded(true)
    connectionRef.current.destroy()
    window.location.reload()
  }

  // console.log("me",me , "stream",stream , "receivingCall",receivingCall , "caller",caller , "callerSignal",callerSignal , "callAccepted",callAccepted , "idToCall",idToCall , "callEnded",callEnded , "name",name)
  console.log("Caller", caller, "CallerName", callerName)

  return (
    <Container className='p2p-main'>
      <div className='video-section'>
        <div style={{ position: 'relative' }}>
          <video className='main-user-vid' playsInline muted ref={myVideo} autoPlay style={{ width: '500px',transform:"scaleX(-1)",marginRight:"1vw"}} />
          <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
            {localStorage.getItem('username')}
          </div>
        </div>
        {caller !== '' ? 
          (callAccepted && !callEnded) && (
            <div style={{ position: 'relative' }}>
              <video playsInline ref={userVideo} autoPlay style={{ width: '500px',transform:"scaleX(-1)" }} />
              <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                {name}
              </div>  
            </div>
          )
          : (callAccepted && !callEnded) && (
            <div style={{ position: 'relative' }}>
              <video playsInline ref={userVideo} autoPlay style={{ width: '500px',transform:"scaleX(-1)" }} />
              <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                {callerName}
              </div>  
            </div>
          )  
        }
      </div>

      <div>
        <Button onClick={() => {
          navigator.clipboard.writeText(me)
          alert('Copied to clipboard')
        }}>Copy id to ClipBoard</Button>
      </div>
      <div>
        <input type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
        <Button onClick={() => callUser(idToCall)}>Call</Button>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div>
            <h1>{name} is calling...</h1>
            <Button onClick={answerCall}>Answer</Button>
          </div>
        ) : null}
      </div>
      <div>
        {callAccepted && !callEnded ? (
          <Button onClick={leaveCall}>End Call</Button>
        ) : null}
      </div>
    </Container>
  )
}

export default P2PInter
