import styled, { css, keyframes } from "styled-components";

const Wrapper = styled.section`
	margin-top: 2rem;
	background-color: paleturquoise;
`;

const FadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`


export { Wrapper, FadeIn};
