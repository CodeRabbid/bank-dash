import "./Toggle.css";

export default function Toggle({ id }) {
  return (
    <div className="toggle checkbox-container">
      <input type="checkbox" id={id} className="toggle-input" />
      <label htmlFor={id} className="toggle"></label>
    </div>
  );
}
