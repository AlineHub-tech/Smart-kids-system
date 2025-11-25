// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import "../styles/Auth.css";

// export default function Signup() {
//   const { signup } = useAuth();
//   const navigate = useNavigate();
//   const [names, setNames] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await signup({ names, email, password });
//     if (res.success) navigate("/user");
//     else setErr(res.error);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Sign Up</h2>
//         {err && <p className="error">{err}</p>}
//         <form onSubmit={handleSubmit}>
//           <input placeholder="Full Name" value={names} onChange={e=>setNames(e.target.value)} required />
//           <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
//           <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
//           <button type="submit">Sign Up</button>
//         </form>
//         <p>Already have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// }