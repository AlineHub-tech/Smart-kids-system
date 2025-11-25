// Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaRegCalendarAlt, FaHistory, FaInfoCircle, FaCog, FaSignOutAlt, FaUsersCog } from 'react-icons/fa';
import '../styles/Sidebar.css';
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarClosed(!sidebarClosed);

  const menuItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaRegCalendarAlt />, label: 'Attendance', path: '/attendance' },
    { icon: <FaUsers />, label: 'Members', path: '/member' },
    { icon: <FaHistory />, label: 'History', path: '/history' },
    { icon: <FaInfoCircle />, label: 'Info', path: '/info' },
    { icon: <FaCog />, label: 'Settings', path: '/settings' },
    { icon: <FaUsersCog />, label: 'Collaboration', path: '/collaboration' },
    { icon: <FaSignOutAlt />, label: 'Logout', path: '/login' },
  ];

  return (
    <div className={`sidebar ${sidebarClosed ? 'closed' : ''}`}>
      <div className='logoo' onClick={toggleSidebar}>
        <img src={logo} alt="logo" className="logo" />
        {!sidebarClosed && <span>SK</span>}
      </div>
      <ul>
        {menuItems.map((item, idx) => (
          <li key={idx} className={location.pathname === item.path ? 'active' : ''}>
            {/* Link igomba gufata icon na label byose */}
            <Link to={item.path} className='menu-link'>
              {item.icon}
              {!sidebarClosed && <span className='label'>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}