import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';
import '../authentication/NavComp.css'



export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="nav-back">
    <nav className="container navbar  navbar-dark ">
      
     
       
        
      <div className="container-fluid"> 
        <div className="navbar-brand">
            <h1><a className='h1-nav' href='/'> <span> CAR</span>AUCTION </a> </h1> 
        </div>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className="btn btn-outline-secondary disabled">
                  {currentUser.email.substring(0, currentUser.email.lastIndexOf("@"))}
                </div>
                <div
                  onClick={() => logout()}
                  className="btn btn-outline-secondary mx-2"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
                
              </>
              
            )}           
          </div>          
        </div>        
      </div>
    </nav>  
    </div> 
  );
};
export default NavComp;
