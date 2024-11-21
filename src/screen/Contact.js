import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "../components/GlobalStyles";
import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";

const ContactSection = styled.section
  .attrs(({ scrollPer }) => ({
    style: {
      transform: `translateY( ${100 - scrollPer}%)`,
      opacity: `${scrollPer / 100}`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["scrollPer"].includes(prop),
  })`
  will-change: transform, opacity;
  transition: transform 1.5s ease, opacity 1.5s ease;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;

  
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    flex-direction: column-reverse;
  }
`;

const ContactForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    padding: 10px;
    margin-top: 10px;
  }

  @media (min-width: ${breakpoints.imac}px) {
    padding: 80px;
  }
`;

const TitleH2 = styled.h2`
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tabletLandscape}px) {
    padding: 18px;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;

  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-weight: 300;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    margin-bottom: 10px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;

  border: 1px solid #ccc;
  border-radius: 4px;
  height: 20vh;
  width: 100%;
  font-weight: 300;
  resize: none;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;

  color: ${colorSet.background};

  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${colorSet.highlight};
  }
`;

const LeftSide = styled(FlexBox)`
  flex: 6;
`;
const RightSide = styled(FlexBox)`
  flex: 4;

  padding: 50px 20px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    padding: 20px 20px;
  }
`;

const StyledSVG = styled.svg`
  width: 100%;
`;

const Contact = ({ visible = true, isContact = true }) => {
  const [name, setName] = useState("");
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    const mailtoLink = `mailto:nwewave.32@gmail.com?subject=🌊Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink; // mailto 링크로 이동
  };

  const [scrollPer, setScrollPer] = useState(isContact ? 100 : 0);

  const handleScroll = useCallback(
    (e) => {
      if (visible) {
        setScrollPer((prev) => {
          if (prev === undefined || prev < 0) prev = 0;
          let result = prev;

          if (e.deltaY > 0) {
            result += 5;
            if (result > 100) result = 100;
          } else if (e.deltaY < 0) {
            result -= 1;
          }

          return result;
        });
      } else setScrollPer(0);
    },
    [visible]
  );

  useEffect(() => {
    if (!isContact) window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [visible]);

  return (
    <ContactSection scrollPer={scrollPer}>
      <LeftSide>
        <StyledSVG
          id="visual"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
        >
          <path
            d="M0 217L25 196C50 175 100 133 150 126C200 119 250 147 300 174C350 201 400 227 450 239C500 251 550 249 600 228C650 207 700 167 750 153C800 139 850 151 875 157L900 163L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z"
            fill="#a9dad6"
          ></path>
          <path
            d="M0 271L25 259C50 247 100 223 150 225C200 227 250 255 300 277C350 299 400 315 450 317C500 319 550 307 600 291C650 275 700 255 750 247C800 239 850 243 875 245L900 247L900 161L875 155C850 149 800 137 750 151C700 165 650 205 600 226C550 247 500 249 450 237C400 225 350 199 300 172C250 145 200 117 150 124C100 131 50 173 25 194L0 215Z"
            fill="#95d2cc"
          ></path>
          <path
            d="M0 439L25 436C50 433 100 427 150 421C200 415 250 409 300 407C350 405 400 407 450 416C500 425 550 441 600 442C650 443 700 429 750 414C800 399 850 383 875 375L900 367L900 245L875 243C850 241 800 237 750 245C700 253 650 273 600 289C550 305 500 317 450 315C400 313 350 297 300 275C250 253 200 225 150 223C100 221 50 245 25 257L0 269Z"
            fill="#81c9c1"
          ></path>
          <path
            d="M0 517L25 520C50 523 100 529 150 535C200 541 250 547 300 549C350 551 400 549 450 549C500 549 550 551 600 553C650 555 700 557 750 551C800 545 850 531 875 524L900 517L900 365L875 373C850 381 800 397 750 412C700 427 650 441 600 440C550 439 500 423 450 414C400 405 350 403 300 405C250 407 200 413 150 419C100 425 50 431 25 434L0 437Z"
            fill="#6eafa8"
          ></path>
          <path
            d="M0 601L25 601C50 601 100 601 150 601C200 601 250 601 300 601C350 601 400 601 450 601C500 601 550 601 600 601C650 601 700 601 750 601C800 601 850 601 875 601L900 601L900 515L875 522C850 529 800 543 750 549C700 555 650 553 600 551C550 549 500 547 450 547C400 547 350 549 300 547C250 545 200 539 150 533C100 527 50 521 25 518L0 515Z"
            fill="#5c968f"
          ></path>
        </StyledSVG>
      </LeftSide>
      <RightSide direction="column" justify="center">
        <TitleH2>Let's surf with me!</TitleH2>
        <ContactForm onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Label>Message</Label>
          <Textarea
            id="emailContent"
            name="message"
            required
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </ContactForm>
      </RightSide>
    </ContactSection>
  );
};

export default Contact;
