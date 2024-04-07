import { useState } from "react";
import Form from "./Form";
import Welcome from "./Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const handleIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };
  return (
    <>
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <Welcome />
      ) : (
        <Form handleIsLoggedIn={handleIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
    </>
  );
}

export default App;
