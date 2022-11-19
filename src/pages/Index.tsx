import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Grid, StepContent, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import { AdminGraph } from "../components/AdminGraph";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import "../styles/home.css";

export const Index = () => {
  const data = {
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
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <img src="/logo.png" />
        </Toolbar>
      </AppBar>

      <Paper style={{ width: "100%", padding: 20 }} elevation={3}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          style={{ marginLeft: 20, marginRight: 400 }}
        >
          <Box>
            <Stack direction="row" spacing={2}>
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                Welcome
              </Typography>

              <img src="/admin.png" style={{ height: 50 }} />
            </Stack>

            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "#575757", marginTop: 20 }}
            >
              We value your your pets’ health and happiness
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            style={{
              width: 300,
              height: 50,
              marginTop: 30,
              backgroundColor: "#39B89E",
              borderRadius: "100px",
            }}
            component={Link}
            to="/predict"
          >
            Start New Checkup
          </Button>

          <img src="/neko.png" />
        </Stack>
      </Paper>

      <Container component="main" maxWidth="xl" sx={{ mb: 4, mt: 5 }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: 20 }}
        >
          Weeky Confimed Infected Cases{" "}
        </Typography>

        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width="700"
        />
      </Container>
    </>
  );
};
