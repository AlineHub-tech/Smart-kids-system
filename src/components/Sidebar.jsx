import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { IconDashboard, IconMember, IconAttendance, IconHistory, IconSettings, IconCollab, IconInfo, IconLogin, IconLogout } from '../icons';

export default function Sidebar({ isOpen, toggleSidebar }){
  const items = [
    {to:'/dashboard', label:'Dashboard', icon:<IconDashboard/>},
    {to:'/member', label:'Member', icon:<IconMember/>},
    {to:'/attendance', label:'Attendance', icon:<IconAttendance/>},
    {to:'/history', label:'History', icon:<IconHistory/>},
    {to:'/settings', label:'Setting', icon:<IconSettings/>},
    {to:'/collaboration', label:'Collaboration', icon:<IconCollab/>},
    {to:'/info', label:'Info', icon:<IconInfo/>},
    {to:'/login', label:'Login', icon:<IconLogin/>},
    {to:'/logout', label:'Logout', icon:<IconLogout/>},
  ];

  return (
   <aside className="sk-sidebar">
      {items.map(i=> (
        <NavLink to={i.to} key={i.to} className={({isActive})=> 'side-item' + (isActive? ' active':'')}>
          <span className="icon">{i.icon}</span>
          <span className="label">{i.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}
