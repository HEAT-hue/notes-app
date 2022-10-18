// jshint esversion:6

import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal.context";

import { Container, StackEl } from "./description-alert.styles";

function DescriptionAlerts() {
  const { showAlert } = useContext(ModalContext);
  return (
    <Container>
      <StackEl sx={{ width: "100%" }} spacing={2}>
        <Alert severity={showAlert.alertSeverity}>
          {showAlert.alertMsg}
          <strong>{showAlert.alertBoldMsg}</strong>
        </Alert>
      </StackEl>
    </Container>
  );
}

export default DescriptionAlerts;
