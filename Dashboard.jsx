import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { activities, dateParts, events, quickAccess } from '../data/events.js';

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
const greeting = () => { const h = new Date().getHours(); return h < 12 ? 'Good morning,' : h < 17 ? 'Good afternoon,' : 'Good evening,'; };

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="screen dashboard">
      <header className="dash-header">
        <div className="profile-row">
          <div className="avatar" aria-label="Profile photo">
            {user.photo ? <img src={user.photo} alt={user.name} /> : initials(user.name)}
          </div>
          <div className="profile-info">
            <span className="greeting">{greeting()}</span>
            <strong>{user.name}</strong>
            <span className="role">{user.role} · {user.location}</span>
          </div>
          <button type="button" className="bell" aria-label="3 notifications">3</button>
        </div>
        <div className="stats">
          <div><strong>{user.leaveDays}</strong><span>Leave days</span></div>
          <div><strong>{user.attendance}%</strong><span>Attendance</span></div>
          <div><strong>{user.tasksDue}</strong><span>Tasks due</span></div>
        </div>
      </header>

      <div className="dash-body">
        <section>
          <div className="section-head"><h2>Today's Activities</h2><span className="link-plain">{activities.length} items</span></div>
          <div className="stack">
            {activities.map((a) => (
              <div className="row-card" key={a.id}>
                <div className="time-box"><strong>{a.time}</strong><span>{a.period}</span></div>
                <div className="grow"><h3>{a.title}</h3><p>{a.sub}</p></div>
                <span className={`pill pill-${a.tone}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head"><h2>Upcoming Events</h2><Link to="/events" className="link">View all</Link></div>
          <div className="stack">
            {events.slice(0, 2).map((e) => {
              const { month, day } = dateParts(e.date);
              return (
                <button type="button" className="row-card clickable" key={e.id} onClick={() => navigate('/events')}>
                  <div className="date-badge"><span>{month}</span><strong>{day}</strong></div>
                  <div className="grow"><h3>{e.title}</h3><p>{e.time.split(' – ')[0]} · {e.location.split(',')[0]}</p></div>
                  <span className="chev" aria-hidden="true">›</span>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="section-head"><h2>Quick Access</h2></div>
          <div className="tiles">
            {quickAccess.map((q) => (
              <button type="button" className="tile" key={q.label}>
                <span className="tile-icon">{q.code}</span>{q.label}
              </button>
            ))}
          </div>
        </section>

        <button type="button" className="btn-ghost" onClick={logout}>Log out</button>
      </div>

      <BottomNav />
    </main>
  );
}
