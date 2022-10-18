import styled from "styled-components";

import ClearIcon from "@mui/icons-material/Clear";

import Button from "../button/button.component";

export const Container = styled.div`
  width: 25rem;
  margin: auto;
  padding: 45px 70px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.548) 0px 1px 4px;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 580px) {
    padding: 35px 45px;
    width: 75vw;
  }

  // @media (max-width: 580px) {
  //   padding: 40px 50px;
  // }

  // @media (max-width: 546px) {
  //   padding: 35px 45px;
  //   width: 65vw;
  // }

  // @media (max-width: 447px) {
  //   padding: 35px 45px;
  //   width: 80vw;
  // }
`;

export const ClearModal = styled(ClearIcon)`
  && {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: auto;
  height: 38px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-bottom: 20px;

  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px;
    border: 2px solid #ffbe0b;
    outline: none;
  }
`;

export const LoginButton = styled(Button)`
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  width: 100%;
`;

export const RegOption = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 0.8rem;

    &:last-child {
      cursor: pointer;
      color: grey;
      // text-decoration: underline;
    }
  }
`;

export const LineBreak = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Line = styled.div`
  width: 45%;
  height: 0px;
  border-top: 1px solid rgb(152, 151, 151);
`;

export const LineBreakText = styled.div`
  font-size: small;
`;

export const GoogleButton = styled(Button)`
  width: 100%;
`;
