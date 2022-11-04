import React, { ChangeEvent, useState } from "react";
import { SuperButton } from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { RequestAPI } from "./api/requestAPI";




export const Request=()=>{
   const [checked, setChecked]=useState(false)
   const [text, setText]=useState('')
   const [disabled, setDisabled]=useState(false)
   
    const onChangeCallback=(e: ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.currentTarget.checked)
      
    }
const onClickHandler=()=>{
    console.log(checked)
    setDisabled(true)
    RequestAPI.createRequest(checked)
    .then((response)=>{
        console.log(response.data.errorText)
        setText(response.data.errorText)
        setDisabled(false)
    })
    .catch((error)=>{
if (error.response){
    setText(error.response.data.errorText)
   
    return
}
setText(error.message)

    })
  
}


    return (
        <div>
            <hr />
          
                homeworks 12
           
                <SuperButton onClick={onClickHandler}  disabled = {disabled? true:false}>Request</SuperButton>
            {/*should work (должно работать)*/}
            <SuperCheckbox  onChange={onChangeCallback} type={'checkbox'}/>
            {text}

            <hr />
        </div>
    );
}


export default Request;
