import React from "react";
import { Link } from "react-router-dom";
import ButtonCmp from "../components/ButtonCmp";

function Home() {
  return (
    <>
      <h1>Test Router</h1>
      <ButtonCmp btn="Result" />
      <Link to={"/Login"}>Go to next page</Link>
    </>
  );
}

export default Home;
