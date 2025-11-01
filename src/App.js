import { useState } from 'react';
import React, { useContext, createContext} from "react";
import UseData from "./hooks/useCustomHook";




// // React useState
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
// import React, { useContext, createContext} from "react";
// import UseData from "./hooks/useCustomHook";

//Context for App
const AuthContext = createContext({
  user: {
    username: "mo",
    "first name": "Moyosore",
    "last name": "Oluwa",
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
    age: 70,
    lga: "Lagos",
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
        bio: "His Excellency has also served as the Governor of Lagos State many years ago",
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
    <>
      <AuthProvider>
        <div className="main-page">
          <UserProfile />
        </div>
      </AuthProvider>
      <UseData />
      </>
  );
}

export default App;
