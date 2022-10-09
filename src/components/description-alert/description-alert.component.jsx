// jshint esversion:6
import "./description-alerts.style.scss";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useContext } from "react";

import { ModalContext } from "../../contexts/modal.context";

function DescriptionAlerts() {
  const { showAlert } = useContext(ModalContext);
  return (
    <div className="alert-container">
      <Stack className="alert" sx={{ width: "100%" }} spacing={2}>
        <Alert severity={showAlert.alertSeverity}>
          {showAlert.alertMsg}
          <strong>{showAlert.alertBoldMsg}</strong>
        </Alert>
      </Stack>
    </div>
  );
}

export default DescriptionAlerts;
