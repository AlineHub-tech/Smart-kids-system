import React from 'react';
import '../styles/Footer.css';
export default function Footer(){
  return (<footer className="sk-footer">
  © Smart Kids. All rights reserved. - {new Date().getFullYear()}
       <div className="social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </footer>
  );
}
