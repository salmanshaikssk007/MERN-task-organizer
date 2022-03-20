import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email , setEmail] =  useState()
    const [password , setPassword] =  useState()
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError ] = useState(false)
   
    const navigate = useNavigate()
    const [show , setShow] = useState(false);
    
    const handleClick = () =>setShow(!show)
   
    const submitHandler = async ()=>{
        setIsLoading(true);
        if(!email || !password){
          // set notification
          setError(true);
          setIsLoading(false);
        
         return ;
        }

        try {

          const config = {
            headers : {
              "Content-type" : "application/json"
            }
          }
    
          const {data} = await axios.post( "/api/user/login" , {  email ,password},config); 

          // notification 

          localStorage.setItem('userInfo' , JSON.stringify(data))
          setIsLoading(false);
          // to navigate to chats
          navigate("/rooms")
    
        } catch (error) {
          // notification
          setError(true);
          setIsLoading(false);
        }
    }

    return (
        <Stack spacing={5}>

        <FormControl id="email" >
           <InputLabel htmlFor="my-input"> Email</InputLabel>
           <Input
           error = {error}
           type='email'
           placeholder="Enter Your Email"
           onChange={(e) => {
            setEmail(e.target.value)
            setError(false)
           }}
           />
       </FormControl>

        <FormControl id="password" >
           <InputLabel htmlFor="my-input"> Password</InputLabel>
           <Input
           error = {error}
           type={show ? "text" : "password"}
           placeholder="Enter Your Password"
           onChange={(e) => {
            setPassword(e.target.value)
            setError(false)
          }} 
           />
           <Button onClick={handleClick}>{show? "Hide" : "Show" }</Button>
       </FormControl>

       
        <LoadingButton
           variant='contained'
           loading = {isLoading }
           width="100%"
           style={{ marginTop: 15 }}
           onClick={submitHandler}>
           Login
         </LoadingButton>

         <Button
        variant="text"
        color="error"
        width="100%"
        onFocus={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
        onClick={submitHandler}
      >
        Login as guest
      </Button>
   </Stack>
    )
}

export default Login;
