import Login from "../login/login";
import { Routes,Route } from "react-router-dom";
import Regeister from "../signup/Regeister";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import Myblogs from "../myblogs/myblogs";
import Authorization from "../authorization/authorization";
import Publicblogs from "../publicblogs/publicblogs";
import Addblogs from "../addblogs/addblogs";



// register
function Routehandling(){

    return (<>
        <Navbar/>
        <Routes>
         
            <Route path="/" element={<Authorization><Home/></Authorization>}></Route>
            <Route path="/myblogs" element={<Authorization><Myblogs/></Authorization>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/publicblogs" element={<Publicblogs/>}></Route>
            <Route path="/register" element={<Regeister/>}></Route>
            <Route path="/addblogs" element={<Authorization><Addblogs/></Authorization>}></Route>

        </Routes></>
    )
}

export default Routehandling