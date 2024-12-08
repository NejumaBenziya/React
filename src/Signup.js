import React from 'react';
import './Signup.css'
import CustBtn from './comp/CustBtn';
import CustTxt from './comp/CustTxt';

function Signup() {
    return (
        <div className='containers'>
            <CustTxt label={'Email'} type={'email'}/>
            <br/>
            <CustTxt label={'password'} type={'password'}/>
            <br/>
         <CustBtn label={'SignUp'}/>
        </div>
    )
}
export default Signup;