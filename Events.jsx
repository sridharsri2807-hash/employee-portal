import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav.jsx';
import EventCard from '../components/EventCard.jsx';
import { eventCategories, events } from '../data/events.js';

export default function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? events : events.filter((e) => e.category === filter);

  return (
    <main className="screen events">
      <header className="dash-header compact">
        <div className="title-row">
          <button type="button" className="back" onClick={() => navigate('/dashboard')} aria-label="Back to dashboard">‹</button>
          <div>
            <h1>Upcoming Events</h1>
            <p>{shown.length} {shown.length === 1 ? 'event' : 'events'} in the next 30 days</p>
          </div>
        </div>
      </header>

      <div className="chips" role="tablist" aria-label="Filter events">
        {eventCategories.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={filter === c} className={`chip${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      <div className="event-list">
        {shown.map((e) => <EventCard key={e.id} event={e} />)}
      </div>

      <BottomNav />
    </main>
  );
}
