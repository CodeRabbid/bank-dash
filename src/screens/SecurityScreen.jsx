import "./SecurityScreen.css";
import Toggle from "../components/Toggle";

export default function SecurityScreen() {
  return (
    <div className="security container">
      <div className="title">Two-factor Authentication</div>
      <div class="checkboxes-container">
        <div className="toggle-container">
          <Toggle id="digital-currency" />
          <label for="digital-currency" class="label">
            Enable two factor authentication
          </label>
        </div>
      </div>
      <div className="title">Change Password</div>
      <div className="input-container">
        <label htmlFor="">Current Password</label>
        <div className="input-frame">
          <input type="text" placeholder="**********" />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="">New Password</label>
        <div className="input-frame">
          <input type="text" placeholder="**********" />
        </div>
      </div>
      <div className="submit-button-container">
        <button>Save</button>
      </div>
    </div>
  );
}
