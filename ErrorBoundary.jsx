import { Component } from 'react';

// Shows the real error on screen instead of a blank white page.
export default class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif', color: '#1e1530' }}>
        <h2 style={{ color: '#6a2c91' }}>Something went wrong</h2>
        <pre style={{ whiteSpace: 'pre-wrap', background: '#fef3f2', padding: 12, borderRadius: 8 }}>{String(this.state.error)}</pre>
        <button onClick={() => { try { localStorage.clear(); } catch {} location.reload(); }}>Clear saved session and reload</button>
      </div>
    );
  }
}
