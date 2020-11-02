// import React from "react";
// import styled, { css } from "styled-components";

// const StyledButton = styled.button`
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   color: #fff;
//   outline: none;
//   border: none;
//   margin-bottom: 1rem;
//   background-color: #333;
//   ${({ primary }) =>
//     primary &&
//     css`
//       color: red;
//       background-color: ${({ bgColor }) => bgColor};
//   `}
// `;

// const Button = ({ primary, bgColor, children }) => {
//   return (
//     <StyledButton primary={primary} bgColor={bgColor}>
//       {children}
//     </StyledButton>
//   );
// };

// export default Button;
import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 1rem;
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

const Button = ({ primary, bgColor, children }) => {
  return (
    <StyledButton primary={primary} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
