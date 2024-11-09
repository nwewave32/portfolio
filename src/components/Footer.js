import styled from "styled-components";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { colorSet, waveColorSet } from "lib/colorSet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Contact from "./Contact";

const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  background-color: ${({ isHome }) =>
    isHome ? waveColorSet.layer4 : colorSet.background};
  overflow-y: hidden;
  padding: 20px 0 25px 0;
  text-align: center;
  p {
    z-index: 10;
    position: relative;
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    text-decoration: none;
    position: relative;
    z-index: 10;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = ({}) => {
  const [isContact, setContact] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const location = useLocation();
  const footerRef = useRef();

  useEffect(() => {
    if (location.pathname === "/contact") setContact(true);
    else setContact(false);
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 1.0 } // Adjust threshold as needed
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <FooterContainer isHome={location.pathname === "/"}>
        <p>Copyright 2024. KIMHAMIN. All rights reserved.</p>
        <SocialLinks ref={footerRef}>
          <a href="https://github.com/nwewave32">GitHub</a>
          <a href="https://linkedin.com/in/hamin-kim-6379472b1">LinkedIn</a>
        </SocialLinks>
      </FooterContainer>
      {visible && location.pathname === "/" && (
        <>
          <Contact visible={visible} isContact={isContact} />
        </>
      )}
    </>
  );
};

export default Footer;
