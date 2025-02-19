import Toggle from "../Common/Toggle";
import "./PreferencesScreen.css";

export default function PreferencesScreen() {
  return (
    <div className="preferences">
      <div className="container">
        <div className="user-data">
          <div className="input-container">
            <label htmlFor="">Currency</label>
            <div className="input-frame">
              <input type="text" placeholder="USD" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Time Zone</label>
            <div className="input-frame">
              <input
                type="text"
                placeholder="(GMT-12:00) International Date Line West"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="notification-preferences-container">
        <label htmlFor="">Notification</label>
        <div class="checkboxes-container">
          <div className="toggle-container">
            <Toggle id="digital-currency" />
            <label for="digital-currency" class="label">
              I send or receive digital currency
            </label>
          </div>
          <div className="toggle-container">
            <Toggle id="merchant-order" />
            <label for="merchant-order" class="label">
              I receive merchant order
            </label>
          </div>
          <div className="toggle-container">
            <Toggle id="recommendation" />
            <label for="recommendation" class="label">
              There are recommendation for my account
            </label>
          </div>
        </div>
      </div>
      <div className="submit-button-container">
        <button>Save</button>
      </div>
    </div>
  );
}
