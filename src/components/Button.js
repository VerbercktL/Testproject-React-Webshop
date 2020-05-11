import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.4rem;
  background: ${(props) => (props.cart ? "var(--mainGreen)" : "transparent")};
  border: 0.05rem solid var(--lightGreen);
  border-color: ${(props) =>
    props.cart
      ? "var(--mainGreen)"
      : props.back
      ? "#6c757d"
      : props.modalSecondary
      ? "var(--mainGreen)"
      : "var(--lightGreen)"};
  color: ${(props) =>
    props.cart
      ? "var(--mainWhite)"
      : props.back
      ? "#6c757d"
      : props.modalSecondary
      ? "var(--mainGreen)"
      : "var(--lightGreen)"};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: ${(props) =>
      props.modalSecondary ? "var(--mainWhite)" : "var(--mainGreen)"};
    background: ${(props) =>
      props.modalSecondary ? "var(--mainGreen)" : "var(--mainWhite)"};
  }

  &:focus {
    outline: none;
  }
`;
