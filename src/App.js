import React from "react";
// import { useState } from "react";
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

// const App = () => {
  //arrow function component

  //state...
//   const [counter, setCounter] = useState(0);

  //Handle increment...
//   const handleIncrement = (event) => {
//     event.preventDefault();
//     setCounter((prev) => prev + 1);
//   };

//   //Handle decrement...
//   const handelDecrement = (event) => {
//     event.preventDefault();
//     setCounter((prev) => prev - 1);
//   };

//   //Render...
//   return (
//     <section className="main-page">
//       {/* <Greeting />
//       <UserProfileCard />
//       <ol>
//         <ListEx />
//       </ol>
//       <ol>
//         {carList}
//       </ol>
//       <div>
//         {listOfUsers}
//       </div> */}

//       {/* <button
//         onClick={(Event) => {
//           console.log("Hello, you clicked me!");
//         }}>
//         Click Me
//       </button> */}

//       {/* <button onClick={handleClick}>Click Me</button> */}
//       <div className="counter-label">{counter}</div>
//       <button className="action-btn" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button className="action-btn" onClick={handelDecrement}>
//         Decrement
//       </button>
//     </section>
//   );
// };

// const App = () => {
  //Handle Change...
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log("Value :", event.target.value);
  // };

  // return (
  //   <section className="form-container">
  //     <form onSubmit={(event) => {
  //       event.preventDefault();
  //       const { name, email, tel } = event.target.elements;
  //       alert(`Hello ${name.value}! Your email is: ${email.value} and your phone number is: ${tel.value}.`);
  //     }}>
  //       <input type="text" placeholder="Enter your name"  name="name"/>
  //       <input type="text" placeholder="Enter your email" name="email" />
  //       <input type="tel" placeholder="Enter your phone" name="tel" />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </section>
  // );

//   const { state, setState } = useState("Hello, World!");

//   const handleMouseOver = (event) => {
//     setState("You hovered over the title!");
//     setTimeout(() => {
//       setState("Hello, World!");
//     }, 1000);
//   };

//   return (
//     <section className="main-page">
//       <h1 onMouseOver={handleMouseOver} className="title">
//         {state}
//         Welcome to My React App
//       </h1>
//     </section>
//   );
// };

// export default App;
// This is a functional component that returns a simple JSX structure


//React Props
// const Car = ({ data }) => {
//   const { brand, color, model, engine } = data;
//   return (
//     <div className="car">{`I drive a ${model} ${color} ${brand}, which is powered by a ${engine} engine.`}</div>
//   );
// };

// const App = () => {
//   const cars = [
//     {
//       brand: "BMW",
//       color: "Charcoal black",
//       model: "2021",
//       engine: "v6 turbo",
//     },
//     {
//       brand: "Benz",
//       color: "black",
//       model: "2022",
//       engine: "v8",
//     },
//     {
//       brand: "Jeep",
//       color: "White",
//       model: "2024",
//       engine: "v6",
//     },
//   ];

//   const listOfCars = cars.map((car) => {
//     return <Car data={car} />;
//   });

//   return <section className="main-page">{listOfCars}</section>;
// };

// export default App;


//Conditional Rendering

//Loader component...
// const Loader = () => {
//   return <div className="loader">Loading...</div>;
// };

// //Content component
// const Content = () => {
//   return (
//     <div className="content">
//       <p>Enim ex culpa velit deserunt in. Laborum minim aute qui fugiat incididunt dolore fugiat culpa pariatur ad velit anim ad ea. Minim commodo veniam dolor enim cillum id. Reprehenderit aliqua elit et aute commodo proident officia nulla officia enim fugiat. Sint cillum cupidatat do et ipsum excepteur esse magna ullamco tempor ipsum mollit velit et. Reprehenderit laborum ea veniam veniam amet voluptate tempor minim sit mollit reprehenderit qui laboris laborum.</p>
//       <p>Enim ex culpa velit deserunt in. Laborum minim aute qui fugiat incididunt dolore fugiat culpa pariatur ad velit anim ad ea. Minim commodo veniam dolor enim cillum id. Reprehenderit aliqua elit et aute commodo proident officia nulla officia enim fugiat. Sint cillum cupidatat do et ipsum excepteur esse magna ullamco tempor ipsum mollit velit et. Reprehenderit laborum ea veniam veniam amet voluptate tempor minim sit mollit reprehenderit qui laboris laborum.</p>
//     </div>
//   );
// }

// //Root component
// const App = () => {
  
//   //State to manage loading...
//   const [isLoading, setIsLoading] = React.useState(true);

//   //Set a timeout to simulate data loading
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 5000);
  
//   //Rendering state
//   return (
//     <section className="main-page">
//       {isLoading ? <Loader /> : <Content />}
//     </section>
//   );
// }

// export default App;

