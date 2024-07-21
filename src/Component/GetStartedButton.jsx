import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: -30px;
  width: 100%;
  z-index: 1000;
  padding-bottom: 1rem;
  margin: 0 !important;
`;

const Button2 = styled.button`
  padding: 12px 30px;
  font-size: 1.4rem;
  align-items: center;
  gap: 10px;
  color: #0d9efa;
  background-color: #0f1a36;
  border: 2px solid #0d9efa;
  border-radius: 25px 25px 0 0;
  cursor: pointer;
  transition:
    background-color 3s ease,
    transform 3s ease,
    opacity 3s ease;
  transform: scale(0.7);

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 320px) {
    padding: 12px 40px;
    font-size: 1.2rem;
  }
`;

const GetStartedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    setIsVisible(scrollPercentage > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Container>
        <Button2>Let's Get Started</Button2>
      </Container>
    )
  );
};

export default GetStartedButton;
