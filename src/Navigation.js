
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation =() => {

    return (
            <ul className="navigation">
                <li
                    className="navimenu">
                    <NavLink to="/Project" activeClassName="active">프로젝트 찾기</NavLink>
                </li>
                <li
                 className="navimenu">
                    <NavLink activeClassName="active" to="/Partner">파트너스찾기</NavLink>
                </li>
                <li
                 className="navimenu">
                    <NavLink activeClassName="active" to="/more">더보기</NavLink>
                </li>
            </ul>  
     
    )
  }
  const MNavigation = ({open, setOpen, isLoggedin} ) => {

    return (
        <div className={open? "navi" : "closenavi"}>
            <ul className="mnavigation">
                <li
                    className="navimenu">
                    <NavLink onClick={()=>{setOpen(false)}} to="/Project" activeClassName="active">프로젝트 찾기</NavLink>
                </li>
                <li
                 className="navimenu">
                    <NavLink onClick={()=>{setOpen(false)}}  activeClassName="active" to="/Partner">파트너스찾기</NavLink>
                </li>
                <li
                 className="navimenu">
                    <NavLink onClick={()=>{setOpen(false)}} activeClassName="active" to="/more">더보기</NavLink>
                </li>
                {isLoggedin ? ""
                :
                <ul>
                    <li><Link onClick={()=>{setOpen(false)}} to="/Login">로그인</Link></li>
                    <li><Link onClick={()=>{setOpen(false)}} to="/Signin">회원가입</Link></li>
                </ul>
                }
            </ul>  
            </div>
     
    )
  }
  
  export {Navigation, MNavigation};
  