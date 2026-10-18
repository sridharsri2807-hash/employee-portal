import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <main className="screen login">
      <header className="login-hero"><Logo size={44} /><p>Employee Portal</p></header>
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); if (email.trim().toLowerCase().endsWith('@xebia.com')) setSent(true); }} noValidate>
        <div>
          <h1>Reset password</h1>
          <p className="muted">Your default password is your Employee ID. If you changed it and forgot, we will email you a reset link.</p>
        </div>
        {sent ? (
          <p className="hint">If an account exists for {email}, a reset link is on its way. (Demo – connect this to your backend.)</p>
        ) : (
          <>
            <label className="field">
              <span>Company email ID</span>
              <div className="input"><input type="email" placeholder="name@xebia.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            </label>
            <button type="submit" className="btn-primary">Send reset link</button>
          </>
        )}
        <p className="center"><Link to="/login" className="link">Back to login</Link></p>
      </form>
    </main>
  );
}
