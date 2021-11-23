import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css' 


class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-top">AuctionCAR <i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                            return (
                                <li key={index} >
                                    <a className={item.cNAME} href={item.url} >
                                    {item.title}
                                    </a>
                                </li>
                            )
                    })}

                    
                </ul>
            </nav>
        )
    }
}

export default Navbar