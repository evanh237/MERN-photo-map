import React from "react";

import "./Avatar.css";

const Avatar = ({ user }) => {
  return (
    <div className={`avatar ${user.className}`} style={user.style}>
      <img
        src={user.image}
        alt={user.alt}
        style={{ width: user.width, height: user.width }}
      />
    </div>
  );
};

export default Avatar;
