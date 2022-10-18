import styled from "styled-components";
import Button from "../button/button.component";

import ClearIcon from "@mui/icons-material/Clear";

export const Form = styled.form`
  width: 60vw;
  max-width: 25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 60px 70px;
  background-color: #ffffff;
  // outline: 1px solid red;
  box-shadow: rgba(0, 0, 0, 0.548) 0px 1px 4px;
  border-radius: 5px;

  @media (max-width: 580px) {
    padding: 35px 45px;
    width: 75vw;
  }

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
  margin-left: auto;
  margin-bottom: 8px;
`;

export const RegOptionsContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
`;

export const RegOption = styled.span`
  font-size: 0.8rem;

  &:first-child {
    color: rgb(29, 29, 121);
  }

  &:last-child {
    color: grey;
  }
`;

export const LineBreak = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
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
