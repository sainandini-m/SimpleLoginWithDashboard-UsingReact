import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Sidebar} from './sidebar.component';
import '../css/navbar.css'
import {IconContext} from 'react-icons';

export default function NavbarComp(props){
    return (
        <> 
    <IconContext.Provider value={{color:'#000000'}}>
        <div className="navbar">
            <span className="menu-text1">{props.title}</span>
            <div className="user">
                <p>Hello , {localStorage.getItem('name') } !</p>
            </div>
        </div>
        <nav className='nav-menu active'>
            <ul className="nav-menu-items" >
                <li className="navbar-toggle">
                   <span className="menu-bars"> <FaIcons.FaBars/>
                        <span className="menu-text">Menu</span>
                    </span> 
                </li>
                <hr/>
                {
                    Sidebar.map((item,index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon} 
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        </IconContext.Provider>

        </>
    )
}