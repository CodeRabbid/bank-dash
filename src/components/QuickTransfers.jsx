import ArrowRight from "../assets/arrow-right.svg?react";
import { useState } from "react";
import "./QuickTransfers.css";
import Airplane from "../assets/airplane.svg?react";

const profiles = [
  {
    name: "Livia Bator",
    role: "CEO",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738618785/h60j3x0l9aaanshfbzsn.jpg",
  },
  {
    name: "Randy Press",
    role: "Director",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738618785/eey9l7zwhevhlldbtjfr.jpg",
  },
  {
    name: "Workman",
    role: "Designer",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738618785/s7q7qygmiwvxnyjpqpul.jpg",
  },
  {
    name: "Tereza Penn",
    role: "Developer",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688164/ujnq70dspqw9sx2j0up1.jpg",
  },
  {
    name: "Theano Maje",
    role: "UI/UX",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688164/qrhi2kak7upx0khrae1y.jpg",
  },
  {
    name: "Yiting Chen",
    role: "Lawyer",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688164/onfu6rgkwimzetjmaqha.jpg",
  },
  {
    name: "Rob Swathi",
    role: "Sales",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688165/url7qxzpcxmitn7rekdx.jpg",
  },
  {
    name: "Vena Ambro",
    role: "Tester",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688165/nkrrqpeycd6azp8fq1nx.jpg",
  },
  {
    name: "Sinta Lilien",
    role: "QA",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688165/mzip7hrqnvwmdjtxadc1.jpg",
  },
  {
    name: "Randy Press",
    role: "Developer",
    picture_url:
      "https://res.cloudinary.com/dqckq3bjr/image/upload/v1738688165/gu83fmn5zl83tg8ttgfq.jpg",
  },
];

const payee_profile_width = 70;

const QuickTransfers = () => {
  const [pos, setPos] = useState(0);
  return (
    <div style={{}}>
      <div
        className="slider"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          disabled={pos == 0}
          className="arrow-button"
          style={{ position: "relative" }}
          onClick={() => {
            setPos(pos - 1);
          }}
        >
          <ArrowRight style={{ rotate: "180deg" }} />
        </button>
        <div
          className="slider-content"
          style={{
            position: "relative",
            height: 110,
            maxWidth: (payee_profile_width + 2) * 3 * 1,
            minWidth: (payee_profile_width + 2) * 3 * 1,
            overflow: "hidden",
          }}
        >
          <div
            className="all-payees"
            style={{
              transition: "transform .4s ease",
              transform: `translateX(${
                pos * -(payee_profile_width + 2) * 3
              }px)`,
              width: (payee_profile_width + 2) * profiles.length,
            }}
          >
            {profiles.map((profile) => (
              <div
                className="payee-summary"
                style={{ width: payee_profile_width }}
                key={profile.picture_url}
              >
                <ShortProfile
                  name={profile.name}
                  role={profile.role}
                  picture_url={profile.picture_url}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          disabled={pos == Math.round(profiles.length / 3) - 1}
          className="arrow-button"
          style={{ position: "relative" }}
          onClick={() => {
            setPos(pos + 1);
          }}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="send-amount">
        <label htmlFor="amount" className="write-amount">
          Write Amount
        </label>
        <div className="amount-frame">
          <input className="amount-input" placeholder="0.00" id="amount" />
          <button className="send-money-button" aria-label="search">
            Send
            <Airplane className="airplane" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ShortProfile = ({ name, role, picture_url }) => {
  return (
    <div>
      <div className="payee-profile-picture-container">
        <img
          src={picture_url}
          className="payee-profile-picture"
          style={{ width: 50, borderRadius: 25 }}
        />
      </div>
      <div className="payee-name">{name}</div>
      <div className="payee-role">{role}</div>
    </div>
  );
};

export default QuickTransfers;
