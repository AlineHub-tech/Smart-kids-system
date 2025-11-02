import React from "react";
import "../styles/LandingPage.css"; // CSS ya landing page

// Ama icons ushobora gukoresha FontAwesome cyangwa react-icons
import { FaBook, FaCalendarAlt, FaChartLine, FaUsers, FaHistory } from "react-icons/fa";

const Landing = ({ onGetStarted }) => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Smart Kids – Learning Made Fun!</h1>
          <p>
            Smart Kids helps children explore, learn, and grow through interactive lessons, attendance tracking,
            and insightful progress reports. Join us today and empower young minds!
          </p>
          <button className="cta-btn" onClick={onGetStarted}>Get Started</button>
        </div>
        <div className="hero-image">
          {/* Placeholder image */}
          <img src="https://via.placeholder.com/400x300.png?text=Smart+Kids" alt="Smart Kids Learning" />
        </div>
      </section>

      {/* Features Cards */}
      <section className="features">
        <h2>What Makes Smart Kids Special?</h2>
        <div className="cards-container">
          <div className="feature-card">
            <FaBook className="feature-icon" />
            <h3>Interactive Learning</h3>
            <p>Engaging lessons, quizzes, and fun activities to enhance skills.</p>
          </div>

          <div className="feature-card">
            <FaCalendarAlt className="feature-icon" />
            <h3>Attendance Tracking</h3>
            <p>Track attendance easily and stay informed about school routines.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Progress Reports</h3>
            <p>Get detailed insights on your child’s learning journey and growth.</p>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Collaboration</h3>
            <p>Communicate with teachers, parents, and peers seamlessly.</p>
          </div>

          <div className="feature-card">
            <FaHistory className="feature-icon" />
            <h3>History & Insights</h3>
            <p>Review past achievements and learning milestones.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Ready to Empower Your Child?</h2>
        <button className="cta-btn" onClick={onGetStarted}>Get Started</button>
      </section>
    </div>
  );
};

export default Landing;
