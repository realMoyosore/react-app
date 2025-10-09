//React useContext
import React, { useContext, createContext, useState } from "react";
import UseData from "./hooks/useCustomHook";

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
