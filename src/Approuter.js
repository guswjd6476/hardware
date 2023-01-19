import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import {Header, MHeader} from "./Header";
import Main from "./Main"
import Project from './Project'
import Partner from "./Partner";
import More from "./More";
import Login from "./Login"
import Signin from "./Signin"
const Approuter =  ({isLoggedin}) => {
    return(
        <HashRouter>
            <Header isLoggedin={isLoggedin} />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Project" element={<Project/>}/>
                <Route path="/Partner" element={<Partner/>}/>
                <Route path="/More" element={<More/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signin" element={<Signin/>}/>
            </Routes>
        </HashRouter>
    )
}

const MApprouter =  ({isLoggedin}) => {
    return(
        <HashRouter>
            <MHeader isLoggedin={isLoggedin} />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Project" element={<Project/>}/>
                <Route path="/Partner" element={<Partner/>}/>
                <Route path="/More" element={<More/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signin" element={<Signin/>}/>
            </Routes>
        </HashRouter>
    )
}

export {Approuter,MApprouter}