import React, { useState, useEffect } from "react";

function State() {
  const [name, setName] = useState("bilal");
  const [isShown, setIsShown] = useState(false);

  //useEffect
  useEffect(() => {
    alert("hello world");
  }, []);

  return (
    <div>
      <button onClick={() => setName("abobakar")}>click me</button>
      <p>{name}</p>
      <button onClick={() => setIsShown(true)}>Show result</button>
      {isShown === true ? <h1>hello world</h1> : null}
    </div>
  );
}

export default State;
