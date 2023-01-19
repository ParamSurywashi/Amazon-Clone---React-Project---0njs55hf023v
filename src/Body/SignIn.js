import React from 'react';
import { useState } from 'react';
import amzLogo from '../images/amazon-logo.png';
import "../styles/signIn.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { saveUserData } from '../Stores/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const dispatchUserList = useDispatch();
    const loginBucket = useSelector((state)=>state.saveUser);

    const [userSignIn, setUseSignIn] = useState({
        emailIdSignIn: '',
        passowrdSignIn: ''
   });

   const handleSignInBtn = (e)=>{
         let emailIdorMobile = document.getElementById("signInEmail").value;
         let PasswordSignIn = document.getElementById("signInPassword").value;
        
          loginBucket.map((userList,index)=>{
            if(userList.emailormobileSignUp===emailIdorMobile && userList.passwordSignUp===PasswordSignIn){
                console.log(userList);
                dispatchUserList(saveUserData(userList));
               // alert("Login Success............."+userList.nameSignUp);
               toast.success("Login Success............."+userList.nameSignUp, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-message-sign-up'
            });
            }
          })
         
   }

  return (
    <>
    <div className='signInContainer'>
        <img src={amzLogo} /> 
      <div className='signInBox'>
       <p id='txtSign'>Sign In</p>
       <label>Email or Mobile Number</label> <br />
       <input type="email" id="signInEmail" placeholder='Email Id' value={userSignIn.emailIdSignIn}  onChange={(e)=>setUseSignIn({...userSignIn, emailIdSignIn: e.target.value})}/> <br /><br />
       <label>Password</label> <br />
       <input type="password" id='signInPassword'  value={userSignIn.passowrdSignIn}   onChange={(e)=>setUseSignIn({...userSignIn, passowrdSignIn: e.target.value})}/> <br /><br />
        <button onClick={handleSignInBtn}>Continue</button>
        </div>
        <div className='signUpBtn'>
          <p>New to Amazon</p>
          <Link to="/signUp"> <button>Create your Amazon Account</button> </Link>
        </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default SignIn