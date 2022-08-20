import { Box, Button, Flex, Grid,Image,Spacer,Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMINGETDATA } from "../../redux/adminreducer/adminaction";

 
 import { Spinner } from '@chakra-ui/react'
import { useState } from "react";

function Adminpage(){

    

    let userdetails = useSelector(state=>state.loginreducer.userdetails);
    let data = useSelector(state=>state.adminreducer?.data)
    let toastauth = useSelector(state=>state.toastreducer.active);


    let config = {
        headers:{
            Authorization:"Bearer"+" "+userdetails?.token,
        }
    }


    let adminreducer = useSelector(state=>state.adminreducer.isloading);


    console.log(data,"datassssss")
    

     let dispatch = useDispatch();


     


     
    useEffect(()=>{

        
          dispatch(ADMINGETDATA(config))
        
      },[])

   
    return (
          
         <Grid w="60%" m="30px auto" gap={30}>
            
            {data.length!=0&& data.map(e=> <Flex gap={"10px"}  >
                <Box>
                <Image w="100px" src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"/>
                <Text >{e.firstname}</Text>
                <Text >{e.email}</Text>
                </Box>
                
                

              </Flex>)} 
             
         </Grid>

    )

}
export default Adminpage