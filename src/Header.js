
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {Navigation, MNavigation} from "./Navigation";
import './style.css'

const Header = ({isLoggedin}) => {
 
    return (
      
    <div className="header">
        <Link to="/" className="logo">
            외주개발플랫폼
        </Link>
        <Navigation/>
        {isLoggedin ? ""
         : <div className="login_wrap">
            <Link to="/Login">로그인</Link>
            <Link to="/Signin">회원가입</Link>
         </div> 
    }
       </div>
    )

 
}

const MHeader = ({isLoggedin}) => {
    const [open, setOpen] = useState(false);
    console.log(open,'open')
    const el = useRef()
    useEffect(()=>{
        const handlemenu = (e) => {
            if(open && el.current&&!el.current.contains(e.target)){
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', handlemenu)
        return () => {
            document.removeEventListener('mousedown', handlemenu)
        }
    },[open])
    console.log(el)
    return (
        <div ref={el} >
        <MNavigation setOpen={setOpen} open={open}/>
    <div className="header">
       
        

        <div className="menu" onClick={() => setOpen((prev) => !prev)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Link to="/" className="mlogo">
            외주개발플랫폼
        </Link>
    </div>
    </div>
    )

 
}
export  {Header, MHeader}