import { useState } from "react";

// --- Password Strength Logic ---
function getStrength(pw) {
  if (!pw) return null;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  
  if (score <= 1) return { score: 1, label: "Weak", color: "#ef4444" };
  if (score === 2) return { score: 2, label: "Fair", color: "#f59e0b" };
  if (score === 3) return { score: 3, label: "Good", color: "#3b82f6" };
  if (score === 4) return { score: 4, label: "Strong", color: "#2563eb" };
  return { score: 5, label: "Very Strong 💪", color: "#10b981" };
}

// --- Sub-Components ---
function StrengthBar({ password }) {
  const result = getStrength(password);
  if (!result) return null;
  const { score, label, color } = result;
  return (
    <div style={{ marginTop: "12px", width: "100%" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            flex: 1, height: "6px", borderRadius: "10px",
            background: i <= score ? color : "#e2e8f0",
            transition: "background 0.4s ease",
          }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Security Level</span>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color }}>{label}</span>
      </div>
    </div>
  );
}

function InputField({ label, type, value, onChange, placeholder, error, showStrength }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div style={{ marginBottom: "28px", width: "100%" }}>
      <label style={{ display: "block", fontWeight: 600, fontSize: "0.9rem", color: "#1e293b", marginBottom: "10px" }}>{label}</label>
      <div style={{ position: "relative", width: "100%" }}>
        <input
          type={isPassword && show ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", padding: "18px 22px", borderRadius: "14px",
            border: `1.5px solid ${error ? "#ef4444" : focused ? "#2563eb" : "#e2e8f0"}`,
            background: "#fff", fontSize: "1rem", color: "#1e293b", outline: "none", boxSizing: "border-box",
            transition: "all 0.2s ease", boxShadow: focused ? "0 0 0 4px rgba(37, 99, 235, 0.1)" : "none",
          }}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} style={{
            position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer", color: "#2563eb", fontWeight: 600, fontSize: "0.85rem"
          }}>
            {show ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      {showStrength && <StrengthBar password={value} />}
      {error && <p style={{ margin: "8px 0 0", fontSize: "0.85rem", color: "#ef4444", fontWeight: 500 }}>{error}</p>}
    </div>
  );
}

export default function AuthForm() {
  const [tab, setTab] = useState("signup");
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const switchTab = (t) => {
    setTab(t);
    setForm({ email: "", password: "", confirm: "" });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Please enter a valid business email";
    if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (tab === "signup" && form.password !== form.confirm) newErrors.confirm = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
    else setSuccess(true);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#f1f5f9", fontFamily: "'DM Sans', sans-serif", padding: "40px 20px"
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');`}</style>
      
      {/* LOCKED WIDE CONTAINER */}
      <div style={{ width: "100%", maxWidth: "600px" }}> 
        <div style={{
          background: "#fff", borderRadius: "32px", padding: "60px",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0"
        }}>
          {!success ? (
            <>
              <div style={{ textAlign: "center", marginBottom: "45px" }}>
                <h1 style={{ fontSize: "2.4rem", color: "#1e293b", fontWeight: 700, margin: 0, letterSpacing: "-1px" }}>
                  {tab === "signup" ? "Get Started" : "Welcome Back"}
                </h1>
                <p style={{ color: "#64748b", marginTop: "12px", fontSize: "1.1rem" }}>
                  Experience the next generation of workflow management.
                </p>
              </div>

              {/* Tab Switcher - Spans full width of the 600px container */}
              <div style={{ display: "flex", background: "#f8fafc", padding: "8px", borderRadius: "18px", marginBottom: "40px", border: "1px solid #eff6ff" }}>
                {["signup", "login"].map(t => (
                  <button key={t} onClick={() => switchTab(t)} style={{
                    flex: 1, padding: "16px", borderRadius: "14px", border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: "1rem", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: tab === t ? "#fff" : "transparent",
                    color: tab === t ? "#2563eb" : "#94a3b8", 
                    boxShadow: tab === t ? "0 10px 15px -3px rgba(0,0,0,0.1)" : "none",
                  }}>
                    {t === "signup" ? "Sign Up" : "Log In"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <InputField label="Email Address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="name@company.com" error={errors.email} />
                <InputField label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="••••••••" error={errors.password} showStrength={tab === "signup"} />
                
                {tab === "signup" && (
                  <InputField label="Confirm Password" type="password" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} placeholder="••••••••" error={errors.confirm} />
                )}

                <button type="submit" style={{
                  width: "100%", padding: "20px", borderRadius: "16px", border: "none", cursor: "pointer",
                  background: "#2563eb", color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginTop: "15px",
                  boxShadow: "0 10px 20px -5px rgba(37, 99, 235, 0.3)", transition: "transform 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                >
                  {tab === "signup" ? "Create Account" : "Sign In"}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>✅</div>
              <h2 style={{ color: "#1e293b", fontSize: "2rem" }}>You're all set!</h2>
              <button onClick={() => setSuccess(false)} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "12px", cursor: "pointer", marginTop: "30px", fontWeight: 700 }}>
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
