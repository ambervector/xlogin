import React from "react";
import { useRef, useState } from "react";

function Form({ handleIsLoggedIn, isLoggedIn }) {
  const [hasError, setHasError] = useState(false);
  const inpUsernameRef = useRef();
  const inpPasswordRef = useRef();
  console.log(isLoggedIn);

  const handleOnClick = () => {
    if (
      inpUsernameRef.current.value === "username" &&
      inpPasswordRef.current.value === "password"
    ) {
      handleIsLoggedIn(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <>
      {hasError && <p>Invalid username or password </p>}
      <label htmlFor="username">Username:</label>
      <input ref={inpUsernameRef} type="text" placeholder="username" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input ref={inpPasswordRef} type="text" placeholder="password" required />
      <br />
      <button onClick={handleOnClick} type="submit">
        Submit
      </button>
    </>
  );
}

export default Form;