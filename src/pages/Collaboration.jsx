 import React, { useContext, useState } from 'react'; 
 import '../styles/Collaboration.css';
  import { AppContext } from '../Context/AppContext'; 
  import Sidebar from '../components/Sidebar';

export default function Collaboration() {
   const { collabs, addCollab, removeCollab } = useContext(AppContext);
    const [name, setName] = useState('');
     const [phone, setPhone] = useState('');

function add(e) { e.preventDefault(); if (!name)
   return; addCollab({ id: Date.now(), name, phone }); setName(''); setPhone(''); }

return ( <div className='page collab-page'> 
<Sidebar /> 
<div className='collab-content'> 
  <h2>Collaboration Leaders</h2>
   <form onSubmit={add} className='collab-form'>
     <input placeholder='Leader Name' value={name} onChange={e => setName(e.target.value)} />
      <input placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
      
       <button type='submit'>Add Leader</button> </form>

<div className='collab-list'>
      {collabs.length === 0 ? (
        <p>No collaborators yet</p>
      ) : (
        collabs.map(c => (
          <div className='collab-item' key={c.id}>
            <div className='collab-info'>
              <span className='c-name'>{c.name}</span>
              <span className='c-phone'>{c.phone}</span>
            </div>
            <button onClick={() => removeCollab(c.id)} className='remove-btn'>Remove</button>
          </div>
        ))
      )}
    </div>
  </div>
</div>

); }