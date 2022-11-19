import {
  Box,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export const Results = () => {
  const [terms, setTerms] = useState(false);
  const [disease, setDisease] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('DISEASE' || ""));
    setDisease(items?.result)
  }, [])


  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        style={{ marginBottom: 30, fontWeight: "bold" }}
      >
        Prediction Results
      </Typography>

      <Typography variant="body1" align="center">
        Based on your answers your cat is suffering from
      </Typography>

      <Typography
        variant="h3"
        style={{ fontWeight: "bold" }}
        align="center"
        sx={{ mt: 5 }}
      >
        {disease}
      </Typography>

      <center>
        <Paper
          variant="outlined"
          style={{ width: "50%", padding: 20, marginTop: 50 }}
        >
          <Typography
            variant="h6"
            style={{ fontWeight: "bold" }}
            sx={{ mb: 2 }}
          >
            Posible Conditions
          </Typography>

          <Typography variant="body1" style={{ fontWeight: "bold" }}>
           {disease?.result}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={30}
            sx={{ mt: 2 }}
            style={{ height: 10, borderRadius: 5 }}
          />

          <Typography
            variant="body1"
            style={{ fontWeight: "bold" }}
            sx={{ mt: 5 }}
          >
            Disease 2
          </Typography>
          <LinearProgress
            variant="determinate"
            value={30}
            sx={{ mt: 2 }}
            style={{ height: 10, borderRadius: 5 }}
          />

          <Typography
            variant="body1"
            style={{ fontWeight: "bold" }}
            sx={{ mt: 5 }}
          >
            Disease 3
          </Typography>
          <LinearProgress
            variant="determinate"
            value={30}
            sx={{ mt: 2 }}
            style={{ height: 10, borderRadius: 5 }}
          />
        </Paper>
      </center>
    </>
  );
};
