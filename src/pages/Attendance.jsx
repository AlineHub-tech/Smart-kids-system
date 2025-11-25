import React, { useContext, useState } from 'react';
 import '../styles/Attendance.css';
  import { AppContext } from '../Context/AppContext'; 
  import Sidebar from '../components/Sidebar';
   import { FaMoon, FaSun } from 'react-icons/fa';

export default function Attendance(){ 
  const { members, addAttendance } = useContext(AppContext);
   const [date, setDate] = useState(new Date().toISOString().slice(0,10));
    const [time, setTime] = useState(new Date().toTimeString().slice(0,5)); const [darkMode, setDarkMode] = useState(false);
     const [sidebarOpen, setSidebarOpen] = useState(true);

const toggleDarkMode = () => setDarkMode(!darkMode);
 const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

function mark(memberId, status){ addAttendance({ id: Date.now()+Math.random(), memberId, status, date, time }); }

return ( <div className={`page attendance-page ${darkMode ? 'dark-mode' : ''}`}>
   <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

<div className="main-content">
    <nav className='top-navbar'>
      <h1>Attendance</h1>
      <div className='nav-actions'>
        <div className='dark-light-toggle' onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
        <button className='sidebar-toggle' onClick={toggleSidebar}></button>
      </div>
    </nav>

    <div className="attendance-controls">
      <label> Date: <input type="date" value={date} onChange={e=>setDate(e.target.value)} /></label>
      <label> Time: <input type="time" value={time} onChange={e=>setTime(e.target.value)} /></label>
    </div>

    <div className="attendance-list">
      {members.length===0 ? <p>No members</p> : members.map(m=> (
        <div className="att-item" key={m.id}>
          <div>
            <div className="m-name">{m.name}</div>
            <div className="m-meta">{m.talent} • {m.phone}</div>
          </div>
          <div className="att-actions">
            <button onClick={()=>mark(m.id,'present')}>Mark Present</button>
            <button onClick={()=>mark(m.id,'absent')}>Mark Absent</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

); }