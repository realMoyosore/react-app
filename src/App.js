import React from "react";
import Greeting from "./components/greetings";
import UserProfileCard from "./components/userProfileCard";
import ListEx from "./components/list";

const App = () => {
  //arrow function component
  return (
    <section className="main-page">
      <Greeting />
      <UserProfileCard />
      <ol>
        <ListEx />
      </ol>
    </section>
  );
};

export default App;
// This is a functional component that returns a simple JSX structure
