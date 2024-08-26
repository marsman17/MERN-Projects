import React, { useState } from "react";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Password reset sent.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                bgcolor: "4F46E5",
                "&:hover": {
                  bgcolor: "#6F46E5",
                },
              }}
            >
              Send Password Reset Email
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && (
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default ForgotPassword;
