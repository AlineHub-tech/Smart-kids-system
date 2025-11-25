 import React, { useContext, useState } from 'react';
  import '../styles/History.css';
   import { AppContext } from '../Context/AppContext'; 
   import Sidebar from '../components/Sidebar'; 
   import { FaMoon, FaSun } from 'react-icons/fa';

export default function History(){ 
  const { attendanceRecords, members } = useContext(AppContext);
   const [darkMode, setDarkMode] = useState(false); 
   const [sidebarOpen, setSidebarOpen] = useState(true);
    const [date, setDate] = useState(new Date().toISOString().slice(0,10));

const toggleDarkMode = () => setDarkMode(!darkMode);
 const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

const list = attendanceRecords.filter(r=> r.date === date);
 const summary = { present: list.filter(l=>l.status==='present').length, absent: list.filter(l=>l.status==='absent').length };

function memberName(id){ const m = members.find(x=>x.id===id); return m? m.name : 'Unknown'; }

return ( <div className={`page history-page ${darkMode ? 'dark-mode' : ''}`}>
   <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div className='main-content'> <nav className='top-navbar'>
       <h1>History</h1> <div className='nav-actions'>
         <div className='dark-light-toggle' onClick={toggleDarkMode}> {darkMode ? <FaSun /> : <FaMoon />} </div> <button className='sidebar-toggle' onClick={toggleSidebar}>☰</button> </div> </nav>

<div className='history-controls'>
      <label>Date <input type='date' value={date} onChange={e=>setDate(e.target.value)} /></label>
    </div>

    <div className='history-summary'>Date: {date} — Present: {summary.present} — Absent: {summary.absent}</div>

    <div className='history-list'>
      {list.length===0 ? <p>There is No History Here</p> : (
        list.map(r=>(
          <div className='hist-item' key={r.id}>
            <div>{memberName(r.memberId)}</div>
            <div>{r.status} • {r.time}</div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

); }