import React from "react";
import styled, { css } from "styled-components";
// import Wrapper from "./styled/index"
import Wrapper from "./styled"

const StyledButton = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: ${({margin}) => margin ? margin : '2rem'};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    `}
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ primary, margin, children }) => {
  return (
		<StyledButton primary={primary} margin={margin}>{children}</StyledButton>
  );
};

export default Button;
