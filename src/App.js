import React from "react";

const Greeting = () => {
  return <p>Hello, there, Good to see you!</p>;
};

//Avatar component
const Avatar = () => {
  return <img className="card-img" src="https://picsum.photos/id/1/200/300" alt="Profile" />;
};

//profile card component
const UserProfileCard = () => { //PascalCase => UserProfileCard
  return (
    <div className="card">
      <Avatar />
      <div className="user-name">Lorem Ipsum</div>
      <p className="user-bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate
      </p>
    </div>
  );
};

const App = () => {
  //arrow function component
  return (
    <section className="main-page">
      <Greeting />
      <UserProfileCard />
    </section>
  );
};

export default App;
// This is a functional component that returns a simple JSX structure
