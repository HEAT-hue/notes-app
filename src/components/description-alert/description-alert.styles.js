import styled from "styled-components";

import Stack from "@mui/material/Stack";

export const Container = styled.div`
  z-index: 40;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StackEl = styled(Stack)`
  && {
    width: 350px;
    margin: auto;
  }
`;
