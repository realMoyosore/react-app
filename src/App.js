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

// const handleClick = (event) => {
//   console.log("Button Clicked")
// }

const App = () => {
  //arrow function component

  //state...
  const [counter, setCounter] = useState(0);

  //Handle increment...
  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  //Handle decrement...
  const handelDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  //Render...
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

      {/* <button onClick={handleClick}>Click Me</button> */}
      <div className="counter-label">{counter}</div>
      <button className="action-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="action-btn" onClick={handelDecrement}>
        Decrement
      </button>
    </section>
  );
};

export default App;
// This is a functional component that returns a simple JSX structure
