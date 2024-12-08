import React from 'react';


const CustTxt=
({label,type})=>{
  return (
    <>
    <label>{label}</label>
      <input type={type}/>
    </>
  );
}

export default CustTxt;