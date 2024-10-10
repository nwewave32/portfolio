import styled from "styled-components";

export const TechnologiesUsed = styled.div`
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
`;

export const Technology = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5px;
  background-color: #a9d4f5;
  max-width: fit-content;
  padding: 4px 5px;
  border-radius: 8px;
  margin-right: 5px;
  word-break: keep-all;
`;

export const FlexBox = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
