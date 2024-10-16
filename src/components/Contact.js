import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #61dafb;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Contact = () => (
  <ContactSection>
    <h2>Let's work together!</h2>
    <ContactForm>
      <Label>Name</Label>
      <Input type="text" name="name" required />
      <Label>Email</Label>
      <Input type="email" name="email" required />
      <Label>Message</Label>
      <Textarea name="message" required />
      <SubmitButton type="submit">Send</SubmitButton>
    </ContactForm>
  </ContactSection>
);

export default Contact;
