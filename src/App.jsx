// /* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // console.log("start");
  // State
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(true);
  // Method
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      faseShowFlag || setFaseShowFlag(true);
    } else {
      faseShowFlag && setFaseShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      {/* <ColorfulMessage color="blue" message="Are you Good?" /> */}
      <ColorfulMessage color="blue">Are you Good?</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="Im Good!" /> */}
      <ColorfulMessage color="pink">Im Good!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>😃</p>}
    </>
  );
};

export default App;
