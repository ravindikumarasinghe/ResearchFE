import { Box, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export const Locations = () => {
  const [terms, setTerms] = useState(false);
  const [terms2, setTerms2] = useState(false);
  const position = [51.505, -0.09];
  const bounds = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        style={{ marginBottom: 30, fontWeight: "bold" }}
      >
        Nearest Veterinary Locations
      </Typography>

      <Typography variant="h5">
        Find nearest vetriancy doctors in your area
      </Typography>

      <Box style={{ width: 600, marginTop: 50 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385600314!2d79.82118608513335!3d6.921922575937266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1668817806992!5m2!1sen!2slk"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
    </>
  );
};
