import React from "react";
import { useRef, useState } from "react";

function Form({ handleIsLoggedIn, isLoggedIn }) {
  const [hasError, setHasError] = useState(false);
  const inpUsernameRef = useRef();
  const inpPasswordRef = useRef();
  console.log(isLoggedIn);

  const handleOnClick = (e) => {
    if (
      inpUsernameRef.current.value === "user" &&
      inpPasswordRef.current.value === "password"
    ) {
      e.preventDefault();

      handleIsLoggedIn(true);
    } else if (
      inpUsernameRef.current.value === "" &&
      inpPasswordRef.current.value === ""
    ) {
      handleIsLoggedIn(false);
      return;
    } else {
      e.preventDefault();

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
