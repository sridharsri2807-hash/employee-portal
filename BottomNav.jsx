import { NavLink } from 'react-router-dom';

const items = [
  { label: 'Home', to: '/dashboard' },
  { label: 'Events', to: '/events' },
  { label: 'Requests' },
  { label: 'Profile' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((i) =>
        i.to ? (
          <NavLink key={i.label} to={i.to} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            <span className="nav-icon" />
            {i.label}
          </NavLink>
        ) : (
          <button key={i.label} className="nav-item" type="button" disabled title="Coming soon">
            <span className="nav-icon" />
            {i.label}
          </button>
        )
      )}
    </nav>
  );
}
