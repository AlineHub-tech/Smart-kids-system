// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import "../styles/Auth.css";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await login({ email, password });
//     if (res.success) {
//       const u = JSON.parse(localStorage.getItem("sk_user"));
//       if (u.role === "ADMIN") navigate("/dashboard");
//       else navigate("/user");
//     } else setErr(res.error);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Login</h2>
//         {err && <p className="error">{err}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//       </div>
//     </div>
//   );
// }
