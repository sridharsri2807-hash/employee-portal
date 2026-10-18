import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Logo from '../components/Logo.jsx';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !password) return setError('Enter your company email ID and Employee ID.');
    setError(login(email, password, remember) ?? '');
  }

  return (
    <main className="screen login">
      <header className="login-hero">
        <Logo size={44} />
        <p>Employee Portal</p>
      </header>

      <form className="login-form" onSubmit={onSubmit} noValidate>
        <div>
          <h1>Welcome back</h1>
          <p className="muted">Sign in with your company email and Employee ID to continue.</p>
        </div>

        <label className="field">
          <span>Company email ID</span>
          <div className="input">
            <input type="email" autoComplete="username" placeholder="name@xebia.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </label>

        <label className="field">
          <span>Password</span>
          <div className="input">
            <input type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your Employee ID" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="link" onClick={() => setShow((s) => !s)}>{show ? 'Hide' : 'Show'}</button>
          </div>
        </label>

        <div className="row-between">
          <label className="check">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            Remember me
          </label>
          <Link to="/forgot-password" className="link">Forgot password?</Link>
        </div>

        {error && <p className="error" role="alert">{error}</p>}

        <button type="submit" className="btn-primary">Login</button>

        <p className="hint">First time? Your default password is your Employee ID. You will be asked to change it after login.</p>
        <p className="center muted">Need help? <a className="link" href="mailto:itsupport@xebia.com">Contact IT Support</a></p>
        <p className="center faint">Demo: srithar.natarajan@xebia.com / XB1001</p>
      </form>
    </main>
  );
}
