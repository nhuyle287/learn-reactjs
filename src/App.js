import React from "react";
import ColorBox from "./component/ColorBox.js";
import "./css/dist/ColorBox.css";
function App() {
  return (
    <section className="color_box">
      <ColorBox color="red"></ColorBox>
      <ColorBox color="blue"></ColorBox>
    </section>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Như Ý</p>
    //   </header>
    // </div>
  );
}

export default App;
