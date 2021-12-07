import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   return (
//     // 不要な要素を追加せずに、要素群を追加可能
//     <>
//       {/* <React.Fragment> */}
//       <h1>Hello!</h1>
//       <p>Are you Good?</p>
//       {/* </React.Fragment> */}
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
