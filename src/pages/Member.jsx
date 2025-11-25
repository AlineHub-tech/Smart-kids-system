import React, { useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { AppContext } from '../Context/AppContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../styles/Member.css';

export default function Member() {
  const { members, addMember, removeMember } = useContext(AppContext);
  const [name, setName] = useState('');
  const [talent, setTalent] = useState('');
  const [phone, setPhone] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  function handleAdd(e) {
    e.preventDefault();
    if (!name) return;
    addMember({ id: Date.now(), name, talent, phone, score: 0 });
    setName(''); setTalent(''); setPhone('');
  }

  return (
    <div className={`page member-page ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-content">
        <nav className='top-navbar'>
          <h1>Members</h1>
          <div className='nav-actions'>
            <div className='dark-light-toggle' onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>
            <button className='sidebar-toggle' onClick={toggleSidebar}>☰</button>
          </div>
        </nav>

        <form className="member-form" onSubmit={handleAdd}>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <input placeholder="Talent" value={talent} onChange={e=>setTalent(e.target.value)} />
          <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
          <button type="submit">Add Member</button>
        </form>

        <div className="member-list">
          {members.length === 0 ? <p>No members yet</p> : members.map(m => (
            <div className="member-item" key={m.id}>
              <div>
                <div className="m-name">{m.name}</div>
                <div className="m-meta">Talent: {m.talent || '-'} • {m.phone || '-'}</div>
              </div>
              <div className="m-actions">
                <button onClick={() => removeMember(m.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}