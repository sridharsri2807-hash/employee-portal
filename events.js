export const eventCategories = ['All', 'Town Hall', 'Training', 'Social', 'Wellness'];

export const events = [
  { id: 1, date: '2026-10-22', time: '10:30 AM – 12:00 PM', category: 'Town Hall', title: 'Q3 Leadership Town Hall', location: 'Main Auditorium, Chennai', going: 186 },
  { id: 2, date: '2026-10-27', time: '2:00 PM – 5:00 PM', category: 'Training', title: 'Cloud Security Workshop', location: 'Training Room 3', going: 42 },
  { id: 3, date: '2026-10-30', time: '8:30 AM – 9:30 AM', category: 'Wellness', title: 'Yoga & Mindfulness Session', location: 'Terrace Garden, Floor 6', going: 64 },
  { id: 4, date: '2026-11-06', time: '12:30 PM – 3:00 PM', category: 'Social', title: 'Pre-Diwali Celebration Lunch', location: 'Cafeteria & Atrium', going: 320 },
  { id: 5, date: '2026-11-12', time: '9:30 AM – 4:30 PM', category: 'Training', title: 'Agile Leadership Bootcamp', location: 'Virtual · MS Teams', going: 97 },
  { id: 6, date: '2026-11-20', time: '11:00 AM – 1:00 PM', category: 'Social', title: 'Xebia Hackathon Kick-off', location: 'Innovation Lab, Floor 4', going: 151 },
];

export const activities = [
  { id: 1, time: '10:00', period: 'AM', title: 'Daily Stand-up · Project Atlas', sub: 'Google Meet · 15 min', status: 'Now', tone: 'now' },
  { id: 2, time: '01:30', period: 'PM', title: 'Submit weekly timesheet', sub: 'Due today', status: 'Due', tone: 'due' },
  { id: 3, time: '04:00', period: 'PM', title: '1:1 with Manager', sub: 'Meeting Room 5B', status: 'Later', tone: 'later' },
];

export const quickAccess = [
  { code: 'AT', label: 'Attendance' }, { code: 'LV', label: 'Leave' },
  { code: 'PS', label: 'Payslips' },   { code: 'HL', label: 'Holidays' },
  { code: 'DR', label: 'Directory' },  { code: 'IT', label: 'Helpdesk' },
  { code: 'TS', label: 'Timesheet' },  { code: 'PL', label: 'Policies' },
];

export function dateParts(iso) {
  const d = new Date(iso + 'T00:00:00');
  return {
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    day: String(d.getDate()).padStart(2, '0'),
    weekday: d.toLocaleString('en-US', { weekday: 'short' }),
  };
}
