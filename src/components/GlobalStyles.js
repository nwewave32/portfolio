import { colorSet } from "lib/colorSet";
import styled from "styled-components";

export const TechnologiesUsed = styled.div`
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
`;

export const Technology = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5px;
  background-color: ${colorSet.accent};
  max-width: fit-content;
  padding: 4px 5px;
  border-radius: 8px;
  margin-right: 5px;
  word-break: keep-all;
  color: white;
`;

export const FlexBox = styled.div
  .attrs((props) => {})
  .withConfig({
    shouldForwardProp: (prop) =>
      !["justify", "direction", "align"].includes(prop),
  })`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const FullContainer = styled(FlexBox)`
  width: 100%;
`;

export const StyledSvg = styled.svg`
  width: 100%;
`;

export const WavyText = styled.text`
  font-weight: 300;
  fill: ${({ color }) => color};
  font-size: 3vh;
  opacity: 0.7;
`;

export const StyledSpan = styled.tspan`
  fill: ${colorSet.accent};
  font-size: 2em;
`;
