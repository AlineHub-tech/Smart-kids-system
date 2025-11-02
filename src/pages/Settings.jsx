import React, { useContext, useState } from 'react';
import '../styles/Settings.css';
import { AppContext } from '../Context/AppContext';

export default function Settings(){
  const { addAnnouncement } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submit(e){
    e.preventDefault();
    if(!title) return;
    addAnnouncement({ id:Date.now(), title, body, date: new Date().toISOString() });
    setTitle(''); setBody('');
  }

  return (
    <div className="page settings-page">
      <h2>Setting</h2>
      <form onSubmit={submit} className="ann-form">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea placeholder="Announcement" value={body} onChange={e=>setBody(e.target.value)} />
        <button type="submit">Publish Announcement</button>
      </form>
    </div>
  );
}