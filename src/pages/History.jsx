import React, { useContext, useMemo, useState } from 'react';
import '../styles/History.css';
import { AppContext } from '../Context/AppContext';

export default function History(){
  const { attendanceRecords, members } = useContext(AppContext);
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));

  const list = attendanceRecords.filter(r=> r.date === date);
  const summary = { present: list.filter(l=>l.status==='present').length, absent: list.filter(l=>l.status==='absent').length };

  function memberName(id){ const m = members.find(x=>x.id===id); return m? m.name : 'Unknown'; }

  return (
    <div className="page history-page">
      <h2>Historic</h2>
      <div className="history-controls"><label>Date <input type="date" value={date} onChange={e=>setDate(e.target.value)} /></label></div>
      <div className="history-summary">Date: {date} — Present: {summary.present} — Absent: {summary.absent}</div>
      <div className="history-list">
        {list.length===0 ? <p>There is No History Here</p> : (
          list.map(r=> (
            <div className="hist-item" key={r.id}>
              <div>{memberName(r.memberId)}</div>
              <div>{r.status} • {r.time}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
