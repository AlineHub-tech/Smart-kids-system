import React from 'react';
import '../styles/Logout.css';
import Sidebar from '../components/Sidebar';
export default function Logout(){
  return (
    <div className="page logout-page">
         <Sidebar />
      <h2>Logout</h2>
      <p>You are logged out.</p>
    </div>
  );
}