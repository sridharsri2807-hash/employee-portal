# Xebia Employee Portal

React + Vite implementation of the **Xebia Employee App** Figma design
(Login → Dashboard → Upcoming Events).

Figma: https://www.figma.com/design/tYJ3bMOsxUaTHKv5QsC382

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Demo login

| Company email | Password (= Employee ID) |
|---|---|
| srithar.natarajan@xebia.com | XB1001 |
| demo.user@xebia.com | XB1002 |

## Screens

- **Login** – company email + Employee ID as password, show/hide, remember me, forgot password flow.
- **Dashboard** – profile, quick stats, today's activities, upcoming events (→ events list), quick-access tiles.
- **Events** – category filters, event cards, register/unregister.

## Project structure

```
src/
  pages/       Login, ForgotPassword, Dashboard, Events
  components/  Logo, BottomNav, EventCard
  context/     AuthContext (session in localStorage)
  data/        employees.js, events.js  (mock data)
  styles.css   design tokens + styles from Figma
```

## Before going to production

- `src/data/employees.js` and `AuthContext.login()` are **mock only**. Replace with your real
  auth (SSO / Azure AD / Okta) and API. Never ship employee IDs in client code.
- Replace the placeholder wordmark in `components/Logo.jsx` with the official Xebia logo.
- Replace the initials avatar with a real photo URL (`photo` field).

## Deploy to GitHub Pages

The app uses `HashRouter` and `base: './'`, so the `dist` folder works on Pages as-is.
Push `dist` to a `gh-pages` branch, or use a GitHub Actions workflow that runs `npm ci && npm run build`
and publishes `dist`.

## Troubleshooting: white / blank screen

- Do **not** double-click `index.html`. Browsers block ES modules on `file://`. Use `npm run dev`.
- Make sure you ran `npm install` first (needs Node 18+).
- To preview a production build, run `npm run build && npm run preview` (do not open `dist/index.html` directly).
- GitHub Pages: publish the **`dist`** folder (build output), not the repo root.
- Open the browser console (F12) – errors are also shown on screen by the error boundary.
