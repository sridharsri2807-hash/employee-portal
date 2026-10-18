import { createContext, useContext, useState } from 'react';
import { employees } from '../data/employees.js';

const AuthContext = createContext(null);
const KEY = 'xebia.session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) ?? null; } catch { return null; }
  });

  // Returns an error message, or null on success.
  function login(email, password, remember) {
    const e = email.trim().toLowerCase();
    if (!e.endsWith('@xebia.com')) return 'Use your company email ID (name@xebia.com).';
    const match = employees.find((x) => x.email === e);
    if (!match || match.employeeId !== password.trim().toUpperCase()) {
      return 'Email or Employee ID is incorrect. Check and try again.';
    }
    setUser(match);
    try { remember ? localStorage.setItem(KEY, JSON.stringify(match)) : localStorage.removeItem(KEY); } catch {}
    return null;
  }

  function logout() {
    setUser(null);
    try { localStorage.removeItem(KEY); } catch {}
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
