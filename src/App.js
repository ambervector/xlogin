import { useState } from "react";
import Form from "./Form";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const handleIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };
  return (
    <>
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <p>Welcome, user</p>
      ) : (
        <Form handleIsLoggedIn={handleIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
    </>
  );
}

export default App;
