import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";
import styled from "styled-components";
import CustomImg from "./CustomImg";

export const TechnologiesUsed = styled.div`
  display: flex;
  padding: 1vh;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.mobile}px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const Technology = styled.div`
  margin-bottom: 1vh;
  background-color: ${colorSet.accent};
  max-width: fit-content;
  padding: 4px 5px;
  border-radius: 8px;
  margin-right: 1vh;
  word-break: keep-all;
  color: ${colorSet.background};

  @media (max-width: ${breakpoints.mobile}px) {
    white-space: nowrap;
  }
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

export const FullContainer = styled(FlexBox)
  .attrs(({ height = "auto" }) => ({
    style: {
      height: `${height}`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["windowWidth", "px", "py"].includes(prop),
  })`
  width: 100%;
`;

export const StyledSvg = styled.svg`
  width: 100%;
`;

export const TextOnWave = styled.text`
  font-weight: 300;
  fill: ${({ color }) => color};
  font-size: 3vh;
  opacity: 0.7;
  @media (min-width: ${breakpoints.imac}px) {
    font-size: 2vh;
  }
`;

export const StyledSpan = styled.tspan`
  fill: ${colorSet.accent};
  font-size: 2em;
`;

export const StyledImg = styled(CustomImg).withConfig({
  shouldForwardProp: (prop) => !["height"].includes(prop),
})`
  height: ${({ height }) => height}vh;

  @media (max-width: ${breakpoints.mobile}px) {
    height: 10vw;
  }

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    height: 10vw;
  }
`;

export const WordBubble = ({ word, height, isLazy = true }) => {
  const wordArr = word.split("");
  return wordArr.map((char, idx) => (
    <StyledImg
      key={char + idx}
      imgSrc={`main/${char}.svg`}
      alt={char + " logo"}
      height={height}
      isLazy={isLazy}
    />
  ));
};
