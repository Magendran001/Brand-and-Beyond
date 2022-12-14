import { Box ,Center,Heading,Image,Text} from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";

function Home()
{
     
   


    let userdetails = useSelector(state=>state.loginreducer.userdetails?.user );
    

    return (<Box w="80%" m="30px auto">
           
           <Heading textAlign={"start"}  fontSize={"20px"}>Hi,{userdetails?.firstname}</Heading>

           <Center gap={"30px"} flexDirection={{base:"column",sm:"row"}}>
          <Link to="/myblogs">
          
             <Image w={{base:"200px",sm:"400px"}} h={{base:"200px",sm:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5fIaKBcBnD5Ej1o7QQ53-2-dDsTHGW467A&usqp=CAU"/>
             <Heading>My BLogs</Heading>
             </Link>
              <Link to="/addblogs">
            
             
             <Image w={{base:"200px",sm:"400px"}} h={{base:"200px",sm:"400px"}} src="https://image.shutterstock.com/image-photo/blogging-concept-top-view-text-260nw-1496752340.jpg"/>
             <Heading>Post New Blog</Heading>


             </Link>
             <Link to="/publicblogs">
            
             
            <Image w={{base:"200px",sm:"400px"}} h={{base:"200px",sm:"400px"}} src="https://ripplethemes.com/wp-content/uploads/edd/2021/02/public-preview.jpg"/>
            <Heading>Public Blog</Heading>


            </Link>


             </Center>


        




    </Box>)
}

export default Home