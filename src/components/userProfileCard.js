import React from "react";
import Avatar from "./avatar";

const UserProfileCard = () => {
  //PascalCase => UserProfileCard
  return (
    <div className="card">
      <div className="user-name">Lorem Ipsum</div>
      <Avatar />
      <p className="user-bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate
      </p>
    </div>
  );
};

export default UserProfileCard;
