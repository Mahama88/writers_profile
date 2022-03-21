import React from "react";

function ProfileCard() {
  return (
    <div lassName="card">
      <img
        src={`images/${writer.avatar}.png`}
        height="300px"
        width="300"
        alt={writer.img}
      />

      <div className="textGroup">
        <h3>{writer.name}</h3>
        <p>{writer.email}</p>
        <p>{witer.phone}</p>

        <button className="actionBtn">Read Bio</button>
      </div>
    </div>
  );
}

export default ProfileCard;
