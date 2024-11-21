import React from "react";
import styled from "styled-components";

const StyledImg = styled.img.withConfig({
  shouldForwardProp: (prop) => !["width"].includes(prop),
})`
  width: ${({ width }) => width};
`;
const CustomImg = ({ imgSrc, alt, width, ...rest }) => {
  return (
    <StyledImg
      src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`}
      alt={alt}
      loading="lazy"
      width={width}
      {...rest}
    />
  );
};

export default CustomImg;
