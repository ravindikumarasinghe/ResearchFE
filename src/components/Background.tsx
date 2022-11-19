import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export const CatBackground = () => {
  const [terms, setTerms] = useState("");
  const [ageValue, setAgeValue] = useState('');
  const [genderValue, setGenderValue] = useState('');

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeValue((event.target as HTMLInputElement).value);
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (ageValue !== "" && terms !== "" && genderValue !== "") {
      const catDetails = {
        ageValue: ageValue,
        terms: terms,
        genderValue: genderValue
      }
      localStorage.setItem('catDetails', JSON.stringify(catDetails))
    }
  })
  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        style={{ marginBottom: 30, fontWeight: "bold" }}
      >
        Background Information About Patient
      </Typography>
      <Typography variant="h5">
        Please Check All The Statements Below That Apply To Your Cat
      </Typography>
      <Typography variant="h6">Your results will include:</Typography>

      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          What is your cat's Age?{" "}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleAgeChange}
          defaultValue="1 - 5"
        >
          <FormControlLabel
            value="1 - 5"
            control={<Radio />}
            label="1-5 years"
          />
          <FormControlLabel
            value="6 - 10"
            control={<Radio />}
            label=" 6 -10 years"
          />
          <FormControlLabel
            value="11 - 15"
            control={<Radio />}
            label=" 11 -15 years "
          />

          <FormControlLabel
            value="16 - 20 "
            control={<Radio />}
            label=" 16 -20 years "
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          What is your cat's Gender
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleGenderChange}
          defaultValue="female"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Where do your cat Lives
      </InputLabel>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={terms}
        fullWidth
        onChange={(e) => setTerms(e.target.value)}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};
