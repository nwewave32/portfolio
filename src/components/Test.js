import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Test = () => {
  const [text, setText] = React.useState("Hello, World.");

  // Animation for each letter
  const wavyAnimation = keyframes`
    0% {
      top: 0px;
    }
    50% {
      top: -15px;
    }
    100% {
      top: 0px;
    }
  `;

  const WavyLetter = styled.span`
    position: relative;
    display: inline-block;
    animation: ${wavyAnimation} 1.3s ease infinite;
    animation-delay: ${(props) => props.delay}s;
  `;

  // Function to map text to animated spans
  const animatedText = text.split("").map((letter, index) => (
    <WavyLetter key={index} delay={index * 0.06}>
      {letter}
    </WavyLetter>
  ));

  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <h1 id="animated">{animatedText}</h1>
    </Container>
  );
};

// Styled components for styling
const Container = styled.div`
  font-family: Arial;
  padding: 2rem;
  color: #4a4a4a;
  background: #e5e5e5;
`;

const Input = styled.input`
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: inherit;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 300px;
`;

export default Test;
