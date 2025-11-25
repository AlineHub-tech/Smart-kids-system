import React from "react"; 
import '../styles/LandingPage.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGraduationCap, FaGamepad, FaBrain, FaUsers }
 from "react-icons/fa";
 import logo from "../assets/logo.jpg";

export default function Landing() 
{ return ( <div className="app"> 
{/* NAVBAR */} 
<nav className="navbar">
      <img src={logo} alt="logo" className="logo" /> <ul className="nav-links"> 
    <li>Home</li> 
    <li>About</li>
     <li>Features</li> <li>Contact</li> </ul>
      <div className="auth"> <button className="login">Login</button>
       <button className="signup">Sign Up</button> </div> </nav>

{/* HERO SECTION */}
  <section className="hero">
    <div className="hero-text">
      <h1>Welcome to Smart Kids </h1>
      <p>
        Learning Platform Empowering Young Minds
        A modern, interactive, and fun digital space that helps kids grow their
        creativity, knowledge, and confidence.
      </p>
    </div>
    <img
      src="https://cdn3d.iconscout.com/3d/premium/thumb/kids-education-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--book-pencil-reading-study-pack-school-illustrations-4342893.png"
      alt="Kids Illustration"
      className="hero-img"
    />
  </section>

  {/* ABOUT SECTION */}
  <section className="section">
    <h2>About Smart Kids</h2>
    <p>
      Smart Kids is a digital learning environment designed to support children using
      technology, animations, and creative lessons.Smart Kids provides engaging 
      learning experiences for children to grow and thrive
       </p>
  </section>

  {/* FEATURES */}
  <section className="section">
    <h2>Our Features</h2>
    <div className="cards">
      <div className="card">
        <FaGraduationCap className="card-icon" />
        <h3>Smart Learning</h3>
        <p>Interactive lessons designed to boost learning ability.</p>
      </div>

      <div className="card">
        <FaGamepad className="card-icon" />
        <h3>Fun Games</h3>
        <p>Exciting and educational games for kids of all ages.</p>
      </div>

      <div className="card">
        <FaBrain className="card-icon" />
        <h3>Creative Thinking</h3>
        <p>Activities that support imagination & creativity.</p>
      </div>

      <div className="card">
        <FaUsers className="card-icon" />
        <h3>Community</h3>
        <p>A safe environment where kids learn together.</p>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer>
    <p>© 2025 Smart Kids Platform. All Rights Reserved.</p>
    <div className="social">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
    </div>
  </footer>
</div>

); }