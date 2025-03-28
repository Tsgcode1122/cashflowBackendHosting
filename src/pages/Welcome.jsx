import React, { useEffect } from "react";

import styled, { keyframes } from "styled-components";
import { useUserData } from "../context/UserDataContext";

// Styled container component
const Container = styled.div`
  padding: 20px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
`;

const Welcome = () => {
  const { userData } = useUserData();
  return (
    <Container>
      <h3>Welcome to Your Dashboard</h3> {/* Update the heading */}
      <p>
        Hey {userData && <strong>{userData.fullName}</strong>}, welcome back to
        your dashboard. Here is a quick overview of your website. Use the
        navigation bar to perform more tasks as the admin.
      </p>
    </Container>
  );
};

export default Welcome;
