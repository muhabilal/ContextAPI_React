import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
function Home() {
  const data = useContext(noteContext);
  return (
    <>
      <h1>Context API in React JS</h1>
      <h2>
        My Name is: {data.name} & My age is: {data.age}
      </h2>
      <Link to={"/NavBar"}>Go to next page</Link>
    </>
  );
}

export default Home;
