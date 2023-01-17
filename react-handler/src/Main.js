import Sub from "./Sub";
import styled from "styled-components";
import { useState } from "react";

const MainDiv = styled.div`
  background: #ffabab;
  padding: 10px;
`;

function Main() {
  const [a, setA] = useState(0);

  const onIncrease = () => {
    console.log("onIncrease");
    setA(a + 1);
  };
  const onDecrease = () => {
    console.log("onDecrease");
    setA(a - 1);
  };
  const onReset = () => {
    console.log("onReset");
    setA(0);
  };

  const handleCalc = {
    onIncrease: onIncrease,
    onDecrease: onDecrease,
    onReset: onReset,
  };

  return (
    <MainDiv>
      <h1>Main</h1>
      <p>{a}</p>
      <Sub onButtonClicked={handleCalc} />
    </MainDiv>
  );
}

export default Main;
