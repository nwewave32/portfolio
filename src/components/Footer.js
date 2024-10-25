import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { colorSet } from "lib/colorSet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  visibility: ${(props) => (props.isHome ? "hidden" : "visible")};
  background-color: ${colorSet.background};

  padding: 20px 0;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = ({}) => {
  const [isHome, setIsHome] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname.replace("/", "") === "");
  }, [location]);
  return (
    <FooterContainer isHome={isHome}>
      <p>Copyright 2024. KIMHAMIN. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/nwewave32">GitHub</a>
        <a href="https://linkedin.com/in/hamin-kim-6379472b1">LinkedIn</a>
      </SocialLinks>
      {/* <svg
        class="u-icon u-icon--shape-blue-1"
        viewBox="0 0 1440 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M391.76 206.372C398.561 257.577 422.989 333.816 564.264 307.142C623.961 295.87 672.971 246.349 725.851 192.917C798.112 119.9 877.602 39.5799 1001.47 39.5799C1020.03 39.5799 1045.16 44.9126 1072.57 50.73C1117.77 60.2253 1171.78 75.3692 1217.1 58.8446C1235.02 52.3131 1251.54 29.2773 1269.26 0H1440V757.5C1409.35 752.861 1330.28 742.392 1297.5 780H962.5C1253.14 611 992 438 927 557.5C901.437 604.497 858 780 629.5 780H0V0H234.397C255.086 12.6598 283.808 20.9856 336.62 15.677C379.328 15.677 422.989 38.5147 422.989 81.0731C422.989 99.9999 415.468 116.747 407.713 134.014C398.519 158.147 388.212 179.658 391.76 206.372Z"
          fill="url(#liner-grad-586)"
        ></path>
        <defs>
          <linearGradient
            id="liner-grad-586"
            x1="1374.09"
            y1="454.721"
            x2="24.9217"
            y2="461.887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#043F5D"></stop>
            <stop offset="1" stop-color="#022B40"></stop>
          </linearGradient>
        </defs>
      </svg> */}
    </FooterContainer>
  );
};

export default Footer;
