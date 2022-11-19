import { Box, Paper, Container, Typography, Grid } from "@mui/material";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Chart from "react-apexcharts";

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export const AdminGraph = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  const char1 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <>
      <Container component="main" maxWidth="xl" sx={{ mb: 4, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs>
            <Chart
              options={char1.options}
              series={char1.series}
              type="bar"
              width="500"
            />
          </Grid>
          <Grid item xs>
            <Chart
              options={char1.options}
              series={char1.series}
              type="line"
              width="500"
            />
          </Grid>
        </Grid>
      </Container>

      <Container component="main" maxWidth="xl" sx={{ mb: 4, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item md>
            <Paper variant="outlined" square sx={{ p: 5 }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Cases of Infections with Location{" "}
              </Typography>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385600966!2d79.82118610598899!3d6.921922575888056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1668819822093!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{ border: 0, marginTop: 20 }}
              ></iframe>
            </Paper>
          </Grid>
          <Grid item md>
            <Paper variant="outlined" square sx={{ p: 5 }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Disease History
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
