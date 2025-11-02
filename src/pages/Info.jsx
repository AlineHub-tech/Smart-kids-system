import React, { useContext } from 'react';
import '../styles/Info.css';
import { AppContext } from '../Context/AppContext';

export default function Info(){
  const { members, attendanceRecords } = useContext(AppContext);

  function participation(member){
    const total = attendanceRecords.filter(a=>a.memberId===member.id).length;
    const pres = attendanceRecords.filter(a=>a.memberId===member.id && a.status==='present').length;
    return { total, pres };
  }

  return (
    <div className="page info-page">
      <h2>Info</h2>
      <div className="info-list">
        {members.map(m=>{
          const p= participation(m);
          const score = p.total===0? 0 : Math.round((p.pres / p.total) * 100);
          return (
            <div className="info-item" key={m.id}>
              <div>{m.name}</div>
              <div>Joined: {m.phone || '-'} • Attendance: {p.pres}/{p.total} • Score: {score}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

