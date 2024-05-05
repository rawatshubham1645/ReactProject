import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>

          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Controls></Controls>
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
