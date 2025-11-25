import React, { useContext, useMemo, useState } from 'react';
 import '../styles/Dashboard.css';
 import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGraduationCap, FaGamepad, FaBrain, FaUsers }
  from "react-icons/fa";
  import { AppContext } from '../Context/AppContext';
   import Sidebar from '../components/Sidebar'; 
   import { FaMoon, FaSun } from 'react-icons/fa';

export default function Dashboard(){ 
  const { members, attendanceRecords, announcements } = useContext(AppContext); const todayStr = new Date().toISOString().slice(0,10); const todays = attendanceRecords.filter(r=> r.date === todayStr); const absentCount = todays.filter(r=> r.status === 'absent').length; const presentCount = todays.filter(r=> r.status === 'present').length;

const [darkMode, setDarkMode] = useState(false); 
const toggleDarkMode = () => setDarkMode(!darkMode);

return ( <div className={`page dashboard-page ${darkMode ? 'dark-mode' : ''}`}> <Sidebar />

<nav className='top-navbar'>
    <h1>Dashboard</h1>
    <div className='nav-actions'>
      <div className='dark-light-toggle' onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  </nav>

  <h2>Dashboard</h2>
  <section className="cards">
    <div className="card">Total members<div className="big">{members.length}</div></div>
    <div className="card">Today's attendance<div className="big">{presentCount} present / {absentCount} absent</div></div>
  </section>

  <section className="ann">
    <h3>Announcements</h3>
    {announcements.length===0 ? <p>No announcements</p> : (
      <ul>{announcements.map((a,idx)=>(<li key={idx}><strong>{a.title}</strong> — {a.body}</li>))}</ul>
    )}
  </section>

  <section className="about">
    <h3>About SmartKid</h3>
    <p>Welcome to Smart Kids – Empowering Young Minds!.</p>
  </section>
 {/* FOOTER */}
  <footer>
    <p>© 2025 Smart Kids Platform. All Rights Reserved.</p>
    <div className="social">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
    </div>
  </footer>
</div>

); }