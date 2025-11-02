import React, { useContext, useState } from 'react';
import '../styles/Collaboration.css';
import { AppContext } from '../Context/AppContext';

export default function Collaboration(){
  const { collabs, addCollab, removeCollab } = useContext(AppContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function add(e){ e.preventDefault(); if(!name) return; addCollab({ id:Date.now(), name, phone }); setName(''); setPhone(''); }

  return (
    <div className="page collab-page">
      <h2>Collaboration</h2>
      <form onSubmit={add} className="collab-form">
        <input placeholder="Leader name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
        <button type="submit">Add Leader</button>
      </form>

      <div className="collab-list">
        {collabs.length===0 ? <p>No collaborators yet</p> : collabs.map(c=> (
          <div className="collab-item" key={c.id}>
            <div>{c.name} • {c.phone}</div>
            <button onClick={()=>removeCollab(c.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
