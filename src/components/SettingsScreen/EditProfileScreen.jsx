import React from "react";
import EditProfile from "../../assets/edit-profile.svg";
import "./EditProfileScreen.css";

export default function EditProfileScreen() {
  return (
    <div className="edit-profile">
      <div className="container">
        <div className="img-container">
          <img src={EditProfile} alt="" width={120} />
        </div>
        <div className="user-data">
          <div className="input-container">
            <label htmlFor="">Your Name</label>
            <div className="input-frame">
              <input type="text" placeholder="Charlene Reed" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">User Name</label>
            <div className="input-frame">
              <input type="text" placeholder="charlene-reed" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Email</label>
            <div className="input-frame">
              <input type="text" placeholder="charlenereed@gmail.com " />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Password</label>
            <div className="input-frame">
              <input type="text" placeholder="**********" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Date of Birth</label>
            <div className="input-frame">
              <input type="text" placeholder="25 January 1990" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Present Address</label>
            <div className="input-frame">
              <input type="text" placeholder="San Jose, California, USA" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Permanent Address</label>
            <div className="input-frame">
              <input type="text" placeholder="San Jose, California, USA" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">City</label>
            <div className="input-frame">
              <input type="text" placeholder="San Jose" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Postal Code</label>
            <div className="input-frame">
              <input type="text" placeholder="45962" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="">Country</label>
            <div className="input-frame">
              <input type="text" placeholder="USA" />
            </div>
          </div>
        </div>
      </div>
      <div className="submit-button-container">
        <button>Save</button>
      </div>
    </div>
  );
}
