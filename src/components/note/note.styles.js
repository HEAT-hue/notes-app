import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  max-height: 280px;
  width: 20rem;
  vertical-align: top;
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  padding: 15px;
  margin: 0px 25px 25px 25px;
  text-align: left;
  overflow: hidden;

  @media (max-width: 453px) {
    width: 70vw;
  }

  @media (max-width: 348px) {
    max-height: 320px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`;

export const NoteTitle = styled.h2`
  color: rgb(75, 73, 73);
  margin-bottom: 4px;
  font-size: 1.3rem;
  text-shadow: 0px 1px 4px rgba(81, 67, 21, 0.249);
`;

export const NoteBody = styled.p`
  color: rgb(98, 96, 96);
  margin-bottom: 10px;
`;

export const ReadMore = styled.span`
  color: blueviolet;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const NoteIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditNoteIcon = styled(EditIcon)`
  && {
    height: 20%;
    cursor: pointer;
    color: rgb(169, 161, 161);

    &:hover {
      color: rgb(91, 89, 89);
    }
  }
`;

export const DeleteNoteIcon = styled(DeleteIcon)`
  && {
    height: 20%;
    cursor: pointer;
    color: rgb(233, 51, 51);

    &:hover {
      color: red;
    }
  }
`;
