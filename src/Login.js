import React from 'react';
import './Login.css'
import CustBtn from './comp/CustBtn';
import CustTxt from './comp/CustTxt';


function Login() {
    return (
        <div className='container'>
             <CustTxt label={'Email'} type={'email'}/>
             <br/>
             <CustTxt label={'Email'} type={'email'}/>
             <br/>
             
         <CustBtn label={'Login'} />
        </div>
    )
}
export default Login;