 import React, { useContext, useState } from 'react';
 import '../styles/Info.css'; 
import Sidebar from '../components/Sidebar'; 
import { AppContext } from '../Context/AppContext'; 
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Info(){ const { members, attendanceRecords } = useContext(AppContext); const [darkMode, setDarkMode] = useState(false); const [sidebarOpen, setSidebarOpen] = useState(true);

const toggleDarkMode = () => setDarkMode(!darkMode); 
const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

function participation(member){ const total = attendanceRecords.filter(a=>a.memberId===member.id).length; const pres = attendanceRecords.filter(a=>a.memberId===member.id && a.status==='present').length; return { total, pres }; }

return ( <div className={`page info-page ${darkMode ? 'dark-mode' : ''}`}> 
<Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
 <div className='main-content'> <nav className='top-navbar'> 
  <h1>Info</h1> <div className='nav-actions'> 
    <div className='dark-light-toggle' onClick={toggleDarkMode}> {darkMode ? <FaSun /> : <FaMoon />} </div> 
    <button className='sidebar-toggle' onClick={toggleSidebar}></button> </div> </nav>

<div className='info-list'>
      {members.map(m=>{
        const p = participation(m);
        const score = p.total===0? 0 : Math.round((p.pres / p.total) * 100);
        return (
          <div className='info-item' key={m.id}>
            <div>{m.name}</div>
            <div>Joined: {m.phone || '-'} • Attendance: {p.pres}/{p.total} • Score: {score}%</div>
          </div>
        );
      })}
    </div>
  </div>
</div>

); }