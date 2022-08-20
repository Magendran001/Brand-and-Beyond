import { Center, FormControl, FormLabel, Grid, Input,Box, Button,Text, Spinner } from "@chakra-ui/react"
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import Toast from "../toast/toast";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";
import Googleauthentication from "../googleauthentication/authentication"







import { useEffect } from "react";
import Spinnerload from "../spinner/spinner";



function Login()
{
 
  let nav  = useNavigate()


    let dispatch = useDispatch();
    let selector = useSelector(state=>state);
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    let isloading = useSelector(state=>state.loginreducer.isloading);
    
    let username = useSelector(state=>state.loginreducer.userdetails?.user?.firstname);
    let toastauth = useSelector(state=>state.toastreducer.active);
  
    
    
    let [loginobj,setloginobj] = useState({});

    const Loginhandler =(event)=>{
        
        let {name,value} = event.target;

        setloginobj({...loginobj,[name]:value})

    }

    const Submithandler =()=>{

        
       
         dispatch(Loginpostdata(loginobj))
    }

    
    useEffect(()=>{

        if(isAuth)
        {
          
          nav("/")
        }

    },[isAuth])

     


    return (
        <Box>
     <Grid w={{base:"300px",md:"500px"}} m="30px auto"  gap={"20px"}>
    <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' name="email"  onChange={Loginhandler} />
      </FormControl>
      <FormControl isRequired >
        <FormLabel>Password</FormLabel>
        <Input placeholder='password' name="password"  onChange={Loginhandler}/>
      </FormControl>
      <Box>
        if you are  new user? click here to <Text as={"span"} color={"blue"}><Link to="/register">Register</Link></Text> 
      </Box>
      <Button bg={"teal"} color="white" onClick={Submithandler}>Submit</Button>
      
      
      </Grid>
      {isloading&& <Spinnerload/>}
       {isAuth&&toastauth&&<Toast title= {`Welcome ${username}`} status  ="success" />}
       <Googleauthentication/>
      </Box>)
} 

export default Login