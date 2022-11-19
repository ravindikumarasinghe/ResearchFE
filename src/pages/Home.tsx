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
import { IntroSection } from "../components/Intro";
import { CatBackground } from "../components/Background";
import { Locations } from "../components/Locations";
import { Symptoms } from "../components/Symptoms";
import { Results } from "../components/Results";

const steps = [
  "Introduction",
  "Cats Details",
  "Symptoms",
  "Results",
  "Locations",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <IntroSection />;
    case 1:
      return <CatBackground />;
    case 2:
      return <Symptoms />;
    case 3:
      return <Results />;
    case 4:
      return <Locations />;
    default:
      throw new Error("Unknown step");
  }
}

export const HomePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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

      <Container component="main" maxWidth="xl" sx={{ mb: 4, mt: 5 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step}>
                    <StepLabel
                      optional={
                        index === 4 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step}
                    </StepLabel>
                    <StepContent>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={6} md={10}>
              <>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is #2001539. We have emailed your order
                      confirmation, and will send you an update when your order
                      has shipped.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}
                    </Box>
                  </React.Fragment>
                )}
              </>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
