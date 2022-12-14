import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 30px 0 5px;
  padding: 0 30px;
`;

export const Form = styled.form`
  color: black;
  width: 40vw;
  min-width: 28rem;
  margin: auto;
  height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 546px) {
    min-width: 70vw;
  }
`;

const Input = styled.input`
  border: none;
  font-size: 1.1rem;
  width: 100%;
  outline: none;
  padding: 5px;
`;

export const NoteTitle = styled(Input)`
  letter-spacing: 1.5px;
  height: 2rem;
`;

export const NoteBody = styled(Input)`
  padding: 10px 5px;
  height: 5rem;
  overflow: auto;
  resize: none;

  &:focus {
    height: 12rem;
    // outline: 1px solid red;
  }
`;

export const AddButton = styled.button`
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
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

  @media (min-width: 768px) {
    .button-37 {
      padding: 10px 30px;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-1px);
  }
`;
