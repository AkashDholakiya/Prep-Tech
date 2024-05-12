import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {Form } from 'react-bootstrap'
import '../css/signup.css'  


const Signup = (props) => {
    const [cred, setcred] = useState({username : '',email : '',role: 'role',password : '',cpassword: ''})

    console.log(cred);
    const handle = async (e) => { 
        let validation = true;
        const regexUsername = /^[a-zA-Z0-9]+([_]?[a-zA-Z0-9])*$/;
        if(cred.username === '' || cred.email === '' || cred.password === '' || cred.cpassword === '' ) {
            alert("Please fill all the fields");
            validation = false;
        }
        else if(regexUsername.test(cred.username) === false){
            alert("Username must be alphanumeric");
            validation = false;
        }
        else if(cred.role === 'role'){
            alert("Please select a role");
            validation = false;
        }
        else if(cred.password !== cred.cpassword){
            alert("Password and Confirm Password must be same");
            validation = false;
        }
        if(validation){
            e.preventDefault();
            const {username,role,email,password} = cred;
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/register`,{
                method : 'POST',
                headers : { 
                    'Content-Type' : 'application/json',
                }, 
                body : JSON.stringify({username,role,email,password})
            })  
            const json = await response.json();
            console.log(json);  
            if(json.success){   
                alert("Email Sent Successfully to your email id Verify your account under 1 hour");
                // props.showAlert("Account Created Successfully","success");
            }else{
                alert(json.message);
                // props.showAlert("Invalid Credentials","danger");
            }
        }else{
            e.preventDefault();
        }
    }

    const onChange = (e) => {
        setcred({...cred, [e.target.name] : e.target.value})
    }

    const handleRole = (e) => {
        setcred({...cred, role : e.target.value})
    }  
    return (
        <div className='outsider'>
            <div className="logsig"> 
                {/* <h1 className='my-5'>Sign Up</h1> */}
                <form onSubmit={handle}> 
                    <div className="mb-1">
                        {/* <label htmlFor="name" className="form-label"></label> */}
                        <input type="name" className="form-control"  value={cred.name} onChange={onChange}  id="username" name="username" aria-describedby="emailHelp" required placeholder='Username'/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email" className="form-label"></label>
                        <input type="email" className="form-control" value={cred.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required placeholder='Email'/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="Role" className="form-label"></label>
                        <Form.Select id='select-role' className='form-control' aria-label="Default select example" onChange={handleRole} >
                            <option value="role" >Role</option>
                            <option value="Student" >Student</option>
                            <option value="Interviewer" >Interviewer</option>
                        </Form.Select>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label"></label>
                        <div className="input-group passeye">
                            <input type="password" className="form-control" value={cred.password} onChange={onChange} id="password" name='password' required placeholder='Password'/>
                        </div>  
                    </div>
                    <div className="mb-1">
                        <label htmlFor="cpassword" className="form-label"></label>
                        <div className="input-group passeye">
                            <input type="password" className="form-control" value={cred.cpassword} onChange={onChange} id="cpassword" name='cpassword' required placeholder='Confirm Password'/>
                        </div>
                    </div>
                    <div className='center'> 
                        <p className='my-2' style={{fontSize:'15px'}}>Already Have an Account? <Link className='link' onClick={() => {props.setshowlogin(true); props.setshowsignup(false)}}>Login</Link></p>
                    </div>
                    <div className="submit">
                        <button type="submit" className="mybtn btn-primary my-2">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup