import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
`;

export const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  width: 40vw;
  min-width: 20rem;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const FormHeader = styled.div`
  position: relative;
`;

export const ClearForm = styled(ClearIcon)`
  && {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: none;
  font-size: 1.1rem;
  width: 100%;
  outline: none;
  padding: 5px;
`;

export const FormTitle = styled(Input)`
  letter-spacing: 1.5px;
  height: 2rem;
  font-weight: 800;
  // outline: 1px solid green;
  width: 95%;
`;

export const FormBody = styled(Input)`
  padding: 10px 5px;
  height: 15rem;
  overflow: auto;
  resize: none;
  margin-block: 15px;
  // outline: 1px solid red;
`;

export const EditButton = styled.button`
  background-color: #13aa52;
  border: 1px solid #13aa52;
  margin-block-start: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  s &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
  }
`;
