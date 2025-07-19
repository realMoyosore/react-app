import React from "react";
// import Greeting from "./components/greetings";
// import UserProfileCard from "./components/userProfileCard";
// import ListEx from "./components/list";

// const cars = ["BMW", "BENZ", "AUDI", "TOYOTA", "TESLA"];
// const carList = cars.map((item) => {
//   return <li key={item}>{item}</li>;
// });

// const userProfile = [
//   {
//     name: "John Doe",
//     age: 30,
//     location: "New York",
//   },
//   {
//     name: "John Doe",
//     age: 30,
//     location: "New York",
//   },
//   {
//     name: "John Doe",
//     age: 30,
//     location: "New York",
//   },
// ];
// const listOfUsers = userProfile.map((user) => {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>{user.age}</p>
//       <p>{user.location}</p>
//     </div>
//   );
// });


const handleClick = (event) => {
  console.log("Button Clicked")
}

const App = () => {
  //arrow function component
  return (
    <section className="main-page">
      {/* <Greeting />
      <UserProfileCard />
      <ol>
        <ListEx />
      </ol>
      <ol>
        {carList}
      </ol>
      <div>
        {listOfUsers}
      </div> */}

      {/* <button
        onClick={(Event) => {
          console.log("Hello, you clicked me!");
        }}>
        Click Me
      </button> */}

      <button onClick={handleClick}>Click Me</button>
    </section>
  );
};

export default App;
// This is a functional component that returns a simple JSX structure
