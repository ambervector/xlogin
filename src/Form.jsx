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
    } else if (
      inpUsernameRef.current.value === "" &&
      inpPasswordRef.current.value === ""
    ) {
      handleIsLoggedIn(false);
      return;
    } else {
      setHasError(true);
    }
  };

  return (
    <>
      <form action="">
        {hasError && <p>Invalid username or password </p>}
        <label htmlFor="username">Username:</label>
        <input
          ref={inpUsernameRef}
          type="user"
          placeholder="username"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          ref={inpPasswordRef}
          type="password"
          placeholder="password"
          required
        />
        <br />
        <button type="submit" onClick={handleOnClick}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
