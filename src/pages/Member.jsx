import React, { useContext, useState } from 'react';
import '../styles/Member.css';
import { AppContext } from '../Context/AppContext';

export default function Member(){
  const { members, addMember, removeMember } = useContext(AppContext);
  const [name, setName] = useState('');
  const [talent, setTalent] = useState('');
  const [phone, setPhone] = useState('');

  function handleAdd(e){
    e.preventDefault();
    if(!name) return;
    addMember({ id:Date.now(), name, talent, phone, score:0 });
    setName(''); setTalent(''); setPhone('');
  }

  return (
    <div className="page member-page">
      <h2>Members</h2>
      <form className="member-form" onSubmit={handleAdd}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Talent" value={talent} onChange={e=>setTalent(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
        <button type="submit">Add Member</button>
      </form>

      <div className="member-list">
        {members.length===0 ? <p>No members yet</p> : members.map(m=> (
          <div className="member-item" key={m.id}>
            <div>
              <div className="m-name">{m.name}</div>
              <div className="m-meta">Talent: {m.talent || '-'} • {m.phone || '-'}</div>
            </div>
            <div className="m-actions">
              <button onClick={()=>removeMember(m.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
