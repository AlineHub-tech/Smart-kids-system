import React, { useContext } from 'react';
import '../styles/Navbar.css';
import { AppContext } from '../Context/AppContext';

export default function Navbar(){
  const { dark, setDark } = useContext(AppContext);
  return (
    <nav className="sk-navbar">
      <div className="nav-left">
        <div className="sk-logo">SK</div>
        <div className="sk-title">SmartKid</div>
      </div>
      <div className="nav-right">
        <button className="mode-btn" onClick={()=>setDark(!dark)}>{dark? 'Light' : 'Dark'}</button>
      </div>
    </nav>
  );
}