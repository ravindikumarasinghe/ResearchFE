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
import "../styles/home.css";

export const AdminPage = () => {
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
        <Stack direction="row" spacing={2}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Admin Dashboard
          </Typography>

          <img src="/admin.png" style={{ height: 30 }} />
        </Stack>
      </Paper>

      <Container component="main" maxWidth="xl" sx={{ mb: 4, mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Visit Count
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  100
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Hourly Visit Count
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  10
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Disease 1 Cases
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  1
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Disease 2 Cases
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  5
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Disease 3 Cases
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  10
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Disease 4 Cases
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  7
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Daily Disease 5 Cases
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  24
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Box className="admin_card " style={{ height: 100, padding: 20 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ height: 100 }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Positive Ratings
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  2
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <AdminGraph />
    </>
  );
};
