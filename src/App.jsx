import React, { useContext, createContext, useState } from "react";

//Context for App
const AuthContext = createContext({
  user: {
    username: "mo",
    name: "Moyo Sore",
    email: "moyo@gmail.com",
    bio: "A passionate developer.",
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
      <form onSubmit={handleBioUpdate}>
        <textarea
          value={user.bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        />
        <button type="submit">Update Bio</button>
      </form>
    </div>
  );
}



//Root Component
function App() {
  return (
    <AuthProvider>
      <div className="main-page">
        <UserProfile />
        <UserBio />
      </div>
    </AuthProvider>
  );
}

export default App;