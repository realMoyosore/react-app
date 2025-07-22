import React from "react";
// // import { useState } from "react";
// // // import Greeting from "./components/greetings";
// // // import UserProfileCard from "./components/userProfileCard";
// // // import ListEx from "./components/list";

// // // const cars = ["BMW", "BENZ", "AUDI", "TOYOTA", "TESLA"];
// // // const carList = cars.map((item) => {
// // //   return <li key={item}>{item}</li>;
// // // });

// // // const userProfile = [
// // //   {
// // //     name: "John Doe",
// // //     age: 30,
// // //     location: "New York",
// // //   },
// // //   {
// // //     name: "John Doe",
// // //     age: 30,
// // //     location: "New York",
// // //   },
// // //   {
// // //     name: "John Doe",
// // //     age: 30,
// // //     location: "New York",
// // //   },
// // // ];
// // // const listOfUsers = userProfile.map((user) => {
// // //   return (
// // //     <div>
// // //       <h2>{user.name}</h2>
// // //       <p>{user.age}</p>
// // //       <p>{user.location}</p>
// // //     </div>
// // //   );
// // // });

// // // const handleClick = (event) => {
// // //   console.log("Button Clicked")
// // // }

// // const App = () => {
// //   //arrow function component

// //   //state...
// //   const [counter, setCounter] = useState(0);

// //   //Handle increment...
// //   const handleIncrement = (event) => {
// //     event.preventDefault();
// //     setCounter((prev) => prev + 1);
// //   };

// //   //Handle decrement...
// //   const handelDecrement = (event) => {
// //     event.preventDefault();
// //     setCounter((prev) => prev - 1);
// //   };

// //   //Render...
// //   return (
// //     <section className="main-page">
// //       {/* <Greeting />
// //       <UserProfileCard />
// //       <ol>
// //         <ListEx />
// //       </ol>
// //       <ol>
// //         {carList}
// //       </ol>
// //       <div>
// //         {listOfUsers}
// //       </div> */}

// //       {/* <button
// //         onClick={(Event) => {
// //           console.log("Hello, you clicked me!");
// //         }}>
// //         Click Me
// //       </button> */}

// //       {/* <button onClick={handleClick}>Click Me</button> */}
// //       <div className="counter-label">{counter}</div>
// //       <button className="action-btn" onClick={handleIncrement}>
// //         Increment
// //       </button>
// //       <button className="action-btn" onClick={handelDecrement}>
// //         Decrement
// //       </button>
// //     </section>
// //   );
// // };

// const App = () => {
//   //Handle Change...
//   // const handleChange = (event) => {
//   //   event.preventDefault();
//   //   console.log("Value :", event.target.value);
//   // };

//   // return (
//   //   <section className="form-container">
//   //     <form onSubmit={(event) => {
//   //       event.preventDefault();
//   //       const { name, email, tel } = event.target.elements;
//   //       alert(`Hello ${name.value}! Your email is: ${email.value} and your phone number is: ${tel.value}.`);
//   //     }}>
//   //       <input type="text" placeholder="Enter your name"  name="name"/>
//   //       <input type="text" placeholder="Enter your email" name="email" />
//   //       <input type="tel" placeholder="Enter your phone" name="tel" />
//   //       <button type="submit">Submit</button>
//   //     </form>
//   //   </section>
//   // );

// //   const { state, setState } = useState("Hello, World!");

// //   const handleMouseOver = (event) => {
// //     setState("You hovered over the title!");
// //     setTimeout(() => {
// //       setState("Hello, World!");
// //     }, 1000);
// //   };

// //   return (
// //     <section className="main-page">
// //       <h1 onMouseOver={handleMouseOver} className="title">
// //         {state}
// //         Welcome to My React App
// //       </h1>
// //     </section>
// //   );
// };

// export default App;
// // // This is a functional component that returns a simple JSX structure


const Car = ({brand, color, model, engine}) => {
  return <div className="car">{
    `I drive a ${model} ${color} ${brand}, which is powered by a ${engine} engine.`
  }</div>
}

const App = () => {
  return (
    <section className="main-page">
    <Car brand="BMW" color="Charcoal black" model="2021" engine="v6 turbo"/>
    </section>
  )
}

export default App;