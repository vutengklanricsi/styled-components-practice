import React from "react";
import styled, { css } from "styled-components";
// import Wrapper from "./styled/index"
import { FadeIn } from "./styled";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSizes.p};
  margin: ${({ margin }) => (margin ? margin : "2rem")};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 0.4s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    `}
  &:hover {
    color: white;
    background-color: purple;
  }
  &.someClass {
    color: blue;
  }

	@media ${({theme}) => theme.mediaQueries.bellow786} {
		font-size: 0.4rem;
		color: blue; 
	}
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blue;
  margin: 2rem;
  :hover ${StyledButton} {
    color: red;
  }
`;

// const SuperButton = styled(StyledButton)`
//   font-size: 2.5rem;
// `;

const Button = ({ primary, margin, children }) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary} margin={margin}>
        {children}
        {/* <p className="someClass">Hello</p> */}
      </StyledButton>
    </OutterWrapper>
  );
};

export default Button;
