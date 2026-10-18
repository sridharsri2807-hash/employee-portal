// Placeholder wordmark. Replace with the official Xebia logo:
// put the file in /src/assets and render <img src={logo} alt="Xebia" />.
export default function Logo({ size = 44 }) {
  return (
    <div className="logo" style={{ '--s': `${size}px` }} aria-label="Xebia">
      <span className="logo-mark" aria-hidden="true">x</span>
      <span className="logo-word">xebia</span>
    </div>
  );
}
