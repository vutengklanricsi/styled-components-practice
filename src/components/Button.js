
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: ${({primary}) => 
		primary ? "red" : "#fff"
	};
  outline: none;
  border: none;
  background-color: #333;
`;

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
