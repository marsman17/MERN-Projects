import React from "react";
import { Grid, Button, TextField, Box } from "@mui/material";
import AddressCard from "./AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      strretAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("postal"),
      mobile: data.get("mobile"),
    };
  };
  return (
    <div className="flex flex-row">
      <Grid container spacing={4}>
        {/* Address Card Section */}
        <Grid item xs={12} lg={5}>
          <Box
            className="border rounded-md shadow-md p-5"
            style={{ width: "100%", height: "32rem" }}
          >
            <div className="p-5 text-left flex flex-col py-6 border-b cursor-pointer">
              <div className="text-3xl text-gray-800 font-normal">
                AddressCard
              </div>
              <Button
                sx={{
                  mt: 1,
                  mr: 41,
                  bgcolor: "#4F46E5",
                  "&:hover": {
                    bgcolor: "#6F46E5",
                  },
                  typography: {
                    fontSize: "0.915rem",
                  },
                }}
                size="small"
                variant="contained"
              >
                Deliver Here
              </Button>
              <AddressCard />
            </div>
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} lg={6}>
          <Box
            className="border rounded-md shadow-md p-5"
            style={{ width: "120%", height: "32rem" }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="postal"
                    name="postal"
                    label="Postal Code"
                    fullWidth
                    autoComplete="postal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="Phone Number"
                    fullWidth
                    autoComplete="mobile"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "#4F46E5",
                      "&:hover": {
                        bgcolor: "#6F46E5",
                      },
                    }}
                    size="medium"
                    variant="contained"
                    fullWidth
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
