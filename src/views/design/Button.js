import styled from "styled-components";

export const Button = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  color: black;
  width: ${props => props.width || null};
  height: 35px;
  border: 1px solid black;;
  border-radius: 20px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: gold;
  transition: all 0.3s ease;
`;
