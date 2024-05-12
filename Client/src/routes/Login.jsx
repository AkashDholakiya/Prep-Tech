import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import '../css/signup.css'


const Login = (props) => {
    const [cred, setcred] = useState({ nameemail: '', password: ''});
    let Navigate = useNavigate();
    const handle = async (e) => {
        let validation = true;
        if(cred.nameemail === '' || cred.password === '' ) {
            alert("Please fill all the fields");
            validation = false;
        }
        
        if(validation){
            e.preventDefault();
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nameemail: cred.nameemail, password: cred.password})
            })
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('token', json.token);
                // localStorage.setItem('userid', json.data.id);
                localStorage.setItem('username', json.data.username);
                localStorage.setItem('role', json.data.role);
                // localStorage.setItem('email', json.data.email);
                // localStorage.setItem('profileimg', json.data.profileimg);
                alert("Login Successful"); 
                Navigate("/");
                window.location.reload();
            } else {
                alert("Invalid Credentials");
                // props.showAlert("Invalid Credentials", "danger");
            }
        }else{
            e.preventDefault();
        }
    }
    const onChange = (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <div className="outsider">
        <div className='logsig'>
            <form onSubmit={handle}>
                <div className="mb-1">
                    <label htmlFor="nameemail" className="form-label"></label>
                    <input type="name" className="form-control" value={cred.nameemail} onChange={onChange} id="nameemail" name="nameemail" aria-describedby="nameemailHelp" placeholder='Username or Email'/>
                </div>
                <div className="mb-1">
                <label htmlFor="password" className="form-label"></label>
                    <div className="input-group passeye">
                        <input type="password" className="form-control" value={cred.password} onChange={onChange} id="password" name='password' placeholder='Password'/>
                    </div>
                </div>
                <div className="center my-3">
                <Link className='link' onClick={() => {props.setshowforgot(true); props.setshowlogin(false)}}>Forgot Password?</Link>
                </div>
                <div className='center'>
                    <p>Don't Have an Account? <Link className='link' onClick={() => {props.setshowsignup(true); props.setshowlogin(false)}}>Signup</Link></p>
                </div>
                <div className="submit">
                <button type="submit" className="mybtn btn-primary my-2">Login</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login