import { useState } from 'react';
import { dateParts } from '../data/events.js';

const tag = { 'Town Hall': 'townhall', Training: 'training', Social: 'social', Wellness: 'wellness' };

export default function EventCard({ event }) {
  const [registered, setRegistered] = useState(false);
  const { month, day, weekday } = dateParts(event.date);
  const going = event.going + (registered ? 1 : 0);

  return (
    <article className="event-card">
      <div className="event-top">
        <div className="date-badge big"><span>{month}</span><strong>{day}</strong></div>
        <div className="event-info">
          <span className={`tag tag-${tag[event.category]}`}>{event.category}</span>
          <h3>{event.title}</h3>
          <p>{weekday} · {event.time}</p>
          <p>{event.location}</p>
        </div>
      </div>
      <div className="event-bottom">
        <span className="going">{going} going</span>
        <button type="button" className={`btn-small${registered ? ' done' : ''}`} onClick={() => setRegistered((r) => !r)}>
          {registered ? 'Registered' : 'Register'}
        </button>
      </div>
    </article>
  );
}
