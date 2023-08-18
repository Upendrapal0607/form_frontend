import React, { useState } from 'react'
import styled from "styled-components"
import Style from "./Form.module.css"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

const initialFormData={
  name:"",
  email:"",
  role:"",
  age:'',
 joinDate:"",
 question:""
}
const Form = () => {
  const [Data, setData] = useState(initialFormData)

console.log(Data);
  const { name,email,role,age,joinDate,question}=Data


  const handleSubmit=(e)=>{
    e.preventDefault()


const url="http://localhost:8080/fillform"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(Data) 
    })
      .then(response => response.json()) 
      .then(data => {
        alert("your form has been submited")
        console.log('Response:', data);
        setData(initialFormData)
      })
      .catch(error => {
       alert(error)
        console.error('Error:', error);
      });
  
    
  }

  const handleClear=()=>{
    setData(initialFormData)
  
  }
  return (
    <div className={Style.form_details}>
      <div className={Style.congrate_msg}>
        <h1 style={{borderBottom:"1px solid gray"}}>Congratulations on being selected to complete a Mercor project!</h1>
        <br />
        <h1 style={{borderBottom:"1px solid gray"}}>Please Fill up the bellow form for confirm your final round interview</h1>
       {/* <br /> */}
        <p style={{fontSize:"16px",fontWeight:"400",color:"red",paddingTop:"5px"}}>* Indicates required question</p>
      </div>
      <form action="" className={Style.form} onSubmit={handleSubmit}>

      <div className={Style.name}>
      <FormControl isInvalid={name===""} isRequired w={"50%"}>
      <FormLabel>Name</FormLabel>
      <Input type='text' value={name} placeholder='Name' onChange={e=>setData(prev=>({...prev,name:e.target.value}))} />
      {name!="" ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
    </FormControl>
      </div>
      <div className={Style.email}>
      <FormControl isInvalid={email==""}  isRequired w={"50%"}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} placeholder='Email' onChange={e=>setData(prev=>({...prev,email:e.target.value}))} />
      {email!="" ? (
        <FormHelperText>
          Enter a vailid email you'd like to receive the message.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
      </div>
      <div className={Style.age}>
      <FormControl isInvalid={age==""} isRequired w={"50%"}>
      <FormLabel>DOB</FormLabel>
      <Input type='date' placeholder='DOB' onChange={e=>setData(prev=>({...prev,age:e.target.value}))} />
      {age!="" ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Date is required.</FormErrorMessage>
      )}
    </FormControl>
      </div>
      <div className={Style.joinDate}>
      <FormControl isInvalid={joinDate==""} isRequired w={"50%"}>
      <FormLabel>Interview Data</FormLabel>
      <Input type='date'placeholder='Date of join' onChange={e=>setData(prev=>({...prev,joinDate:e.target.value}))} />
      {joinDate!="" ? (
        <FormHelperText>
         inter your technical Round interview Data
        </FormHelperText>
      ) : (
        <FormErrorMessage>Date of Joining is required.</FormErrorMessage>
      )}
    </FormControl>
      </div>
      <div className={Style.role}>
      <FormControl isInvalid={role==""} isRequired w={"50%"}>
      <FormLabel>Role</FormLabel>
      <Input type='text' value={role} onChange={e=>setData(prev=>({...prev,role:e.target.value}))} placeholder='Full Stack Development' />
      {role!="" ? (
        <FormHelperText>
         Your position in startup
        </FormHelperText>
      ) : (
        <FormErrorMessage>Role is required.</FormErrorMessage>
      )}
    </FormControl>
      </div>

      <div className={Style.question}>
      <FormControl w={"50%"}>
      <FormLabel>Do you have any question (Optional)</FormLabel>
      <Input type='text' value={question} onChange={e=>setData(prev=>({...prev,question:e.target.value}))} />
    </FormControl>
      </div>
      <div className={Style.submit}>
      <FormControl w={"20%"}>
      <FormLabel></FormLabel>
      <Input cursor={"pointer"} backgroundColor={"rgb(103, 58, 183)"} type='submit'/>
    </FormControl>
      <FormControl w={"20%"}>
      <FormLabel></FormLabel>
      <button style={{color:"rgb(103, 58, 183)"}} onClick={handleClear}>clear</button>
    </FormControl>
      </div>
      </form>
      {/* <div className={Style.age}></div>
      <div className={Style.role}></div>
      <div className={Style.interview_date}></div>
      <div className={Style.email}></div> */}
    </div>
  )
}

export default Form

