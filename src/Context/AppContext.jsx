import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }){
  const [members, setMembers] = useState(() => JSON.parse(localStorage.getItem('sk_members')||'[]'));
  const [attendanceRecords, setAttendanceRecords] = useState(() => JSON.parse(localStorage.getItem('sk_attendance')||'[]'));
  const [announcements, setAnnouncements] = useState(() => JSON.parse(localStorage.getItem('sk_ann')||'[]'));
  const [collabs, setCollabs] = useState(() => JSON.parse(localStorage.getItem('sk_collabs')||'[]'));
  const [dark, setDark] = useState(() => JSON.parse(localStorage.getItem('sk_dark')||'false'));

  useEffect(()=>{ localStorage.setItem('sk_members', JSON.stringify(members)); },[members]);
  useEffect(()=>{ localStorage.setItem('sk_attendance', JSON.stringify(attendanceRecords)); },[attendanceRecords]);
  useEffect(()=>{ localStorage.setItem('sk_ann', JSON.stringify(announcements)); },[announcements]);
  useEffect(()=>{ localStorage.setItem('sk_collabs', JSON.stringify(collabs)); },[collabs]);
  useEffect(()=>{ localStorage.setItem('sk_dark', JSON.stringify(dark)); document.body.className = dark ? 'theme-dark' : 'theme-light'; },[dark]);

  // helper functions
  function addMember(member){ setMembers(prev=>[...prev, member]); }
  function removeMember(id){ setMembers(prev=>prev.filter(m=>m.id!==id)); }
  function addAttendance(record){ setAttendanceRecords(prev=>[...prev, record]); }
  function addAnnouncement(a){ setAnnouncements(prev=>[a,...prev]); }
  function addCollab(c){ setCollabs(prev=>[...prev,c]); }
  function removeCollab(id){ setCollabs(prev=>prev.filter(c=>c.id!==id)); }

  return (
    <AppContext.Provider value={{ members, addMember, removeMember, attendanceRecords, addAttendance, announcements, addAnnouncement, collabs, addCollab, removeCollab, dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
}

