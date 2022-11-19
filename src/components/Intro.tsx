import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
export const IntroSection = () => {
  const [terms, setTerms] = useState(false);
  const [terms2, setTerms2] = useState(false);

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        style={{ marginBottom: 30, fontWeight: "bold" }}
      >
        Disease Prediction Checkup
      </Typography>

      <Typography variant="body1">
        Take a short (3 min) symptom assessment. The information you give
        including location and results will be used for predictive analysis of
        emerging disease to help others.
      </Typography>

      <Typography variant="body1">Your results will include:</Typography>

      <ul>
        <li>Possible disease of cause.</li>
        <li>Locations of nearest veterinary doctors for seek help.</li>
      </ul>

      <Typography>About this symptom checker</Typography>

      <ul>
        <li>Created and validated by veterinary doctors</li>
        <li>Clinically validated with patient (cats) cases</li>
      </ul>

      <Typography>
        Add answers for the questions according to your observations on your
        cat's visible symptoms.
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={terms}
            onChange={() => setTerms(!terms)}
            name="antoine"
          />
        }
        label=" I have read all the conditions and terms here. "
      />

      <br />

      <FormControlLabel
        control={
          <Checkbox
            checked={terms2}
            onChange={() => setTerms2(!terms2)}
            name="antoine"
          />
        }
        label=" I agree to all above mentioned conditios and terms."
      />
    </>
  );
};
