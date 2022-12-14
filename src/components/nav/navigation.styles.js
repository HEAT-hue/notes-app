import styled from "styled-components";

export const NavigationEl = styled.nav`
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  color: #ffffff;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 30px;
  background-color: #ffbe0b;
  background-image: linear-gradient(120deg, #fcc221 0%, #f6bc50 100%);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  letter-spacing: 1px;
  font-family: "Barlow", sans-serif;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: large;
`;

export const NavigationDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-right: 10px;
`;
