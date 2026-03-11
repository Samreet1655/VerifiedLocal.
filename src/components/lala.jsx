import { useState } from "react";

function getStrength(pw) {
  if (!pw) return null;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  
  // Adjusted colors for Blue theme: Red -> Amber -> Blue -> Green
  if (score <= 1) return { score: 1, label: "Weak", color: "#ef4444" };
  if (score === 2) return { score: 2, label: "Fair", color: "#f59e0b" };
  if (score === 3) return { score: 3, label: "Good", color: "#3b82f6" };
  if (score === 4) return { score: 4, label: "Strong", color: "#2563eb" };
  return { score: 5, label: "Very Strong 💪", color: "#10b981" };
}

function StrengthBar({ password }) {
  const result = getStrength(password);
  if (!result) return null;
  const { score, label, color } = result;
  const hints = ["", "Add uppercase letter", "Add a number", "Add a symbol", ""];
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ display: "flex", gap: "5px", marginBottom: "6px" }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            flex: 1, height: "4px", borderRadius: "2px",
            background: i <= score ? color : "#e2e8f0",
            transition: "background 0.4s",
          }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontFamily: "'DM Sans',sans-serif" }}>
          {score < 5 ? hints[score] : ""}
        </span>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color, fontFamily: "'DM Sans',sans-serif" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function InputField({ label, type, value, onChange, placeholder, error, showStrength }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{
        display: "block",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: "0.75rem",
        color: "#475569",
        marginBottom: "6px",
      }}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          type={isPassword && show ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "8px",
            border: `1px solid ${error ? "#ef4444" : focused ? "#2563eb" : "#cbd5e1"}`,
            background: "#fff",
            fontSize: "0.95rem",
            color: "#1e293b",
            outline: "none",
            boxSizing: "border-box",
            transition: "all 0.2s",
            boxShadow: focused ? "0 0 0 4px rgba(37, 99, 235, 0.1)" : "none",
          }}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(s => !s)} style={{
            position: "absolute", right: "12px", top: "50%",
            transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer",
            color: focused ? "#2563eb" : "#94a3b8", padding: 0,
            display: "flex", alignItems: "center",
          }}>
            <EyeIcon open={show} />
          </button>
        )}
      </div>
      {showStrength && <StrengthBar password={value} />}
      {error && (
        <p style={{ margin: "6px 0 0", fontSize: "0.75rem", color: "#ef4444", fontWeight: 500 }}>{error}</p>
      )}
    </div>
  );
}

export default function AuthForm() {
  const [tab, setTab] = useState("signup");
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    setErrors(err => ({ ...err, [field]: "" }));
    setSuccess(false);
  };

  const switchTab = (t) => {
    setTab(t); setForm({ email: "", password: "", confirm: "" });
    setErrors({}); setSuccess(false);
  };

  const handleSubmit = () => {
    const e = {}; // Basic validation logic
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (form.password.length < 8) e.password = "Too short";
    if (Object.keys(e).length > 0) setErrors(e);
    else setSuccess(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        body { margin: 0; background: #f8fafc; }
        input::placeholder { color: #94a3b8; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        padding: "20px",
      }}>
        {/* Soft decorative background circles */}
        <div style={{ position: "fixed", width: "40vw", height: "40vw", borderRadius: "50%", background: "rgba(37, 99, 235, 0.03)", top: "-10%", right: "-5%", zIndex: 0 }} />
        <div style={{ position: "fixed", width: "30vw", height: "30vw", borderRadius: "50%", background: "rgba(37, 99, 235, 0.03)", bottom: "-5%", left: "-5%", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "420px" }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
            border: "1px solid #f1f5f9",
          }}>
            {!success && (
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <h1 style={{ fontSize: "1.75rem", color: "#1e293b", fontWeight: 700, marginBottom: "8px" }}>
                  {tab === "signup" ? "Create Account" : "Welcome Back"}
                </h1>
                <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
                  Please enter your details to continue.
                </p>
              </div>
            )}

            {!success && (
              <div style={{ display: "flex", background: "#f1f5f9", padding: "4px", borderRadius: "12px", marginBottom: "32px" }}>
                {["signup", "login"].map(t => (
                  <button key={t} onClick={() => switchTab(t)} style={{
                    flex: 1, padding: "10px", borderRadius: "8px", border: "none", cursor: "pointer",
                    fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s",
                    background: tab === t ? "#ffffff" : "transparent",
                    color: tab === t ? "#2563eb" : "#64748b",
                    boxShadow: tab === t ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
                  }}>
                    {t === "signup" ? "Sign Up" : "Login"}
                  </button>
                ))}
              </div>
            )}

            {success ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#dcfce7", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 style={{ color: "#1e293b", marginBottom: "10px" }}>Success!</h2>
                <button onClick={() => setSuccess(false)} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: 600 }}>Go to Dashboard</button>
              </div>
            ) : (
              <>
                <InputField label="Email Address" type="email" value={form.email} onChange={update("email")} placeholder="name@company.com" error={errors.email} />
                <InputField label="Password" type="password" value={form.password} onChange={update("password")} placeholder="••••••••" error={errors.password} showStrength={tab === "signup"} />
                {tab === "signup" && (
                  <InputField label="Confirm Password" type="password" value={form.confirm} onChange={update("confirm")} placeholder="••••••••" error={errors.confirm} />
                )}

                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    width: "100%", padding: "14px", borderRadius: "10px", border: "none", cursor: "pointer",
                    background: "#2563eb", color: "#fff", fontWeight: 700, fontSize: "0.95rem",
                    transition: "all 0.2s", opacity: btnHover ? 0.9 : 1,
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
                  }}
                >
                  {tab === "signup" ? "Get Started" : "Sign In"}
                </button>

                <p style={{ textAlign: "center", marginTop: "24px", fontSize: "0.85rem", color: "#64748b" }}>
                  {tab === "signup" ? "Already have an account? " : "New here? "}
                  <span onClick={() => switchTab(tab === "signup" ? "login" : "signup")} style={{ color: "#2563eb", fontWeight: 600, cursor: "pointer" }}>
                    {tab === "signup" ? "Login" : "Create one"}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}