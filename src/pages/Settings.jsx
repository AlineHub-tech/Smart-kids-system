import React, { useContext, useState } from 'react'; 
import '../styles/Settings.css';
 import Sidebar from '../components/Sidebar';
  import { AppContext } from '../Context/AppContext'; 
  import { FaMoon, FaSun } from 'react-icons/fa';

export default function Settings(){ const { addAnnouncement } = useContext(AppContext); const [darkMode, setDarkMode] = useState(false); const [sidebarOpen, setSidebarOpen] = useState(true); const [title, setTitle] = useState(''); const [body, setBody] = useState('');

const toggleDarkMode = () => setDarkMode(!darkMode); const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

function submit(e){ e.preventDefault(); if(!title) return; addAnnouncement({ id:Date.now(), title, body, date: new Date().toISOString() }); setTitle(''); setBody(''); }

return ( <div className={`page settings-page ${darkMode ? 'dark-mode' : ''}`}> <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> <div className='main-content'> <nav className='top-navbar'> <h1>Settings</h1> <div className='nav-actions'> <div className='dark-light-toggle' onClick={toggleDarkMode}> {darkMode ? <FaSun /> : <FaMoon />} </div> <button className='sidebar-toggle' onClick={toggleSidebar}>☰</button> </div> </nav>

<form onSubmit={submit} className='ann-form'>
      <input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea placeholder='Announcement' value={body} onChange={e=>setBody(e.target.value)} />
      <button type='submit'>Publish Announcement</button>
    </form>
  </div>
</div>

); }