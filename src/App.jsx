import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      {/* <ColorfulMessage color="blue" message="Are you Good?" /> */}
      <ColorfulMessage color="blue">Are you Good?</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="Im Good!" /> */}
      <ColorfulMessage color="pink">Im Good!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up!</button>
      <p>{num}</p>
    </>
  );
};

export default App;
