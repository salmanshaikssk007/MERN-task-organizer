import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';

const Signup = () => {

    const [name , setName] =  useState()
    const [email , setEmail] =  useState()
    const [password , setPassword] =  useState()
    const [confrimPassword , setConfrimPassword] =  useState()
    const [pic , setPic] = useState();
    const [isLoading , setIsLoading] =  useState(false);
    
    const [show , setShow] = useState(false);
    const [show1 , setShow1] = useState(false);
    const handleClick = () =>setShow(!show)
    const handleConfrimClick = () =>setShow1(!show1)

    // error handlers
    const [picError , setPicError] = useState(false)
    const [confrimPasswordError , setConfrimPasswordError] = useState(false)
    const [passwordError , setPasswordError] = useState(false)
    const [nameError , setNameError] = useState(false)
    const [ emailError , setEmailError] = useState(false)

    const navigate = useNavigate();
    
    const postDetails = (pic)=>{

        setIsLoading(true);
        if(pic === undefined){
          //  notification
          setPicError(true)
            return ;
        }
        if(pic.type === 'image/jpeg' || pic.type === 'image/png'){
            const data = new FormData();
            data.append("file" , pic);
            data.append("upload_preset" , "task_organizer");
            data.append("cloud_name" , "salmanshaik")
            
            // to send pic to cloudniary 
            fetch('https://api.cloudinary.com/v1_1/salmanshaik/image/upload' , {
              method : 'post' ,
              body : data
            })
            .then(res => res.json())
            .then(data => {
              setPic(data.url.toString());
              console.log(data)
              setIsLoading(false);
            })
            .catch(err=>{
              console.log(err);
              setIsLoading(false);
            })   
          }else{
          //  notification
            setPicError(true);
            setIsLoading(false);
            return ;
          }

    }
    const submitHandler = async()=>{

        if(!name || !email || !confrimPassword || !password){
            // notification
            setNameError(true);
            setEmailError(true);
            setPasswordError(true);
            setConfrimPasswordError(true);
            return ;
        }
        if(password !== confrimPassword){
           // notification
           setPasswordError(true)
           setConfrimPasswordError(true)
            return ;
        }
        try {

            const config = {
              headers : {
                "Content-type" : "application/json"
              }
            }
    
            const {data} = await axios.post( "/api/user" , { name ,email ,password,pic},config); 
            
          //  notification
    
            localStorage.setItem('userInfo' , JSON.stringify(data))
            setIsLoading(false);
            // to navigate to chats
            navigate("/rooms")
    
          } catch (error) {
            // notification
            alert('registration failed')
            console.log(error);
            setIsLoading(false);
          }
    }

    return (
        <Stack spacing={5}>
             <FormControl id="first-name" >
                <InputLabel htmlFor="my-input"> Name</InputLabel>
                <Input
                error={nameError}
                type='text'
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setNameError(false)
                  setName(e.target.value)
                }}
                />
            </FormControl>

             <FormControl id="email" >
                <InputLabel htmlFor="my-input"> Email</InputLabel>
                <Input
                error ={emailError}
                type='email'
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError(false)
                }}
                />
            </FormControl>

             <FormControl id="password" >
                <InputLabel htmlFor="my-input"> Password</InputLabel>
                <Input
                error = {passwordError}
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError(false)
                } }
                />
                <Button onClick={handleClick}>{show? "Hide" : "Show" }</Button>
            </FormControl>

             <FormControl id="confrim_password">
                <InputLabel htmlFor="my-input"> Confrim Password</InputLabel>
                <Input
                error = {confrimPasswordError}
                type={show1 ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setConfrimPassword(e.target.value)
                  setConfrimPasswordError(false)
                } }
                />
                <Button onClick={handleConfrimClick}>{show1? "Hide" : "Show" }</Button>
            </FormControl>

            <FormControl id="pic">
                <Input
                error = {picError}
                type="file"
                style={{padding:'3px' , borderStyle : 'none'}}
                accept="image/*"
                onChange={(e) => {
                  postDetails(e.target.files[0])
                  setPicError(false)
                }}
                />
                 <FormHelperText id="my-helper-text">Upload a picture.</FormHelperText>
             </FormControl>
             <LoadingButton
                loading = {isLoading }
                variant='contained'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}>
                Sign Up
              </LoadingButton>
        </Stack>
    )
}

export default Signup ;
