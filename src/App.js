// import { useState } from 'react';

// const CounterButtons = ({ count, setCount }) => {

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   // Conditions to display different messages based on count

//   return (
//     <>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <p>Current Count: {count}</p>
//       <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
//       <p>Count is {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}</p>
//       <p>Count is {count > 10 ? 'Greater than 10' : count < -10 ? 'Less than -10' : 'Between -10 and 10'}</p>
//       <p>Count is {count === 0 ? 'Zero' : count > 0 ? 'Positive' : 'Negative'}</p>
//       <p>Count is {count % 5 === 0 ? 'Multiple of 5' : 'Not a multiple of 5'}</p>
//       <p>Count is {count % 3 === 0 ? 'Multiple of 3' : 'Not a multiple of 3'}</p>
//       <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
//       <p>Count is {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}</p>
//       <p>Count is {count > 10 ? 'Greater than 10' : count < -10 ? 'Less than -10' : 'Between -10 and 10'}</p>
//     </>
//   );
// }

// // Main component
// export default function MyApp() {
// const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count Up {count} Count Down</h1>
//       <CounterButtons count={count} setCount={setCount}/>
//     </>
//   );
// }

//React Hooks
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return <section>
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//   </section>
// }

// export default App;

//React useEffect
// import React, { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     // This code runs after the component mounts
//     if (count > 0) {
//       console.log("Count:", count);
//     }
//   }, [count]); // Empty dependency array means this runs once

//   const handleClick = (event) => {
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div>Hello, useEffect!</div>
//       <button onClick={handleClick}>Click here!</button>
//     </>
//   );
// }

// export default App;

//React useState
// import React, { useState } from "react";

// //Create root component
// function App() {
//   //Define state
//   const [count, setCount] = useState(0);

//   //Function to increment the count
//   const handleIncrement = (event) => {
//     event.preventDefault();
//     setCount((prevCount) => prevCount + 1);
//   };

//   //Function to decrement count
//   const handleDecrement = (event) => {
//     event.preventDefault();
//     setCount((prevCount => prevCount - 1));
//   };

//   return (
//     <section>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </section>
//   );
// }

// export default App;

//React useContext
import React, { useContext, createContext, useState } from "react";

//Context for App
const AuthContext = createContext({
  user: {
    username: "mo",
    name: "Moyo Sore",
    email: "moyo@gmail.com",
  },
  verified: false,
});

//Context Provider
function AuthProvider(props) {
  const [user, setUser] = useState({
    username: "jagaban",
    name: "Bola Ahmed Tinubu",
    email: "jagaban@gmail.com",
    bio: "His Excellency, Ashiwaju Bola Ahmed Tinubu is the current serving President of the Federal Republic of Nigeria.",
  });

  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUsers: setUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

//User Bio Component
function UserBio() {
  const {user, setUser} = useContext(AuthContext) 
  const handleBioUpdate = (event) => {
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        bio: "His Excellency has also serve as the Governor of Lagos state many years ago",
      };
    });
  };

  return (
    <div>
      <h1>User Bio</h1>
      <div>{user.bio}</div>
      <button onClick={handleBioUpdate}>Update Bio</button>
    </div>
  );
}

//User profile component
const UserProfile = () => {
  const { user, verified } = useContext(AuthContext);

  return (
    <>
      <h1>User Profile</h1>
      <div>Username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Verified: {verified ? "Yes" : "No"}</div>
      <UserBio/>
    </>
  );
};

//Root Component
function App() {
  return (
    <AuthProvider>
      <div className="main-page">
        <UserProfile />
        <useData />
      </div>
    </AuthProvider>
  );
}

export default App;
