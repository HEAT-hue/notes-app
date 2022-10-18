import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: rgb(19, 75, 124);
  border: 1px solid rgb(19, 75, 124);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 1rem;
  font-weight: 800;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    background-color: rgb(19, 75, 124);
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  padding: 7px 25px;

  &:hover {
    background-color: #4285f4;
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  }
`;
