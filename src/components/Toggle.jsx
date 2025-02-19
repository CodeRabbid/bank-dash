import "./Toggle.css";

export default function Toggle({ id }) {
  return (
    <div class="toggle checkbox-container">
      <input type="checkbox" id={id} className="toggle-input" />
      <label for="digital-currency" class="toggle"></label>
    </div>
  );
}
