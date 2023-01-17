import styled from "styled-components";

const SubDiv = styled.div`
  background: #ffdec1;
  padding: 10px;
`;
function Sub({ onButtonClicked }) {
  return (
    <SubDiv>
      <h1>Sub</h1>
      <button onClick={onButtonClicked.onDecrease}>🔴</button>
      <button onClick={onButtonClicked.onReset}>🟡</button>
      <button onClick={onButtonClicked.onIncrease}>🟢</button>
    </SubDiv>
  );
}

export default Sub;
