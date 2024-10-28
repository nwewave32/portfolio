import styled from "styled-components";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { colorSet } from "lib/colorSet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import Contact from "./Contact";

const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => ![""].includes(prop),
})`
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
  const [isContact, setContact] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const location = useLocation();
  const footerRef = useRef();
  const [scrollPer, setScrollPer] = useState(0);

  const handleScroll = useCallback(() => {
    if (visible)
      if (footerRef.current.offsetTop <= window.scrollY + window.innerHeight) {
        console.log(
          "##asdf",
          window.scrollY,
          window.innerHeight,
          footerRef.current.offsetTop,
          window.scrollY + window.innerHeight - footerRef.current.offsetTop
        );
        const result =
          (window.scrollY + window.innerHeight - footerRef.current.offsetTop) /
          window.innerHeight;
        console.log("##result", result);
        setScrollPer(result);
      } else setScrollPer(0);
  }, [visible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("wheel", (e) => {
    //   if (visible) {
    //     setScrollPer((prev) => {
    //       console.log("##prev", prev);
    //       if (prev === undefined || prev < 0) prev = 0;
    //       let result = prev;
    //       console.log("##result1", result);
    //       console.log("##e.deltaY", e.deltaY);
    //       if (e.deltaY > 0) {
    //         result = result + 10;
    //       } else if (e.deltaY < 0) {
    //         result -= 10;
    //       }
    //       console.log("##result2", result);
    //       return result;
    //     });
    //   } else setScrollPer(0);
    // });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  useEffect(() => {
    if (location.pathname === "/contact") setContact(true);
    else setContact(false);
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <FooterContainer ref={footerRef}>
      <p>Copyright 2024. KIMHAMIN. All rights reserved.</p>
      {visible &&
        (isContact ? (
          <Zoom>
            <SocialLinks>
              <a href="https://github.com/nwewave32">GitHub</a>
              <a href="https://linkedin.com/in/hamin-kim-6379472b1">LinkedIn</a>
            </SocialLinks>
          </Zoom>
        ) : (
          <Contact visible={visible} />
        ))}
    </FooterContainer>
  );
};

export default Footer;
