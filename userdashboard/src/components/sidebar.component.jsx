import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const Sidebar=[
   {
     title: 'Home',
     path:'/home',
     icon:<AiIcons.AiFillHome/>  ,
     cName:'nav-text'
   } ,
   {
    title: 'Posts',
    path:'/posts',
    icon:<IoIcons.IoIosPaper/>  ,
    cName:'nav-text'
  } ,
  {
    title: 'Logout',
    path:'/logout',
    icon:<FiIcons.FiLogOut/>  ,
    cName:'nav-text'
  } 

]