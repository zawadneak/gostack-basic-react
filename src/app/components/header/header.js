import React from 'react';
import { GoPerson } from "react-icons/go";

import './header.css'


import facebook from '../../../assets/img/facebook.png'

function Header(){
  return(
    <div className="header">
      <img src={facebook}></img>
      <strong><GoPerson/> Profile</strong>
    </div>
  )
}

export default Header