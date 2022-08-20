import { Box } from "@chakra-ui/react";
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { Publicblogdata } from "../../redux/publicblogreducer/publicblogaction";
import ArticleList from "./blogtemplate";
import Spinnerload from "../spinner/spinner";

function Publicblogs()
{

    let blogdata =useSelector(state=>state.Publicblogreducer.blogs);
    let isloading = useSelector(state=>state.Publicblogreducer.isloading);
   
    let dispatch = useDispatch();
    useEffect(()=>{
       
        dispatch(Publicblogdata())
     
        
    },[])


    
    return (<Box w="80%" m="auto">   

       { isloading&&  <Spinnerload/>}
{blogdata.map((e,index)=><Box key={index}><ArticleList data={e}/></Box>)}
          
    </Box>)
}
export default Publicblogs