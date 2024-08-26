import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Grid>
        <Typography variant="body2" component="p" align="center">
          URBANIA LOVES YOU
        </Typography>
        <Typography variant="body2" component="p" align="center">
          ______
        </Typography>
      </Grid>
      <Grid
        pt={2}
        className="bg-gray-800 flex flex-row justify-around text-white text-center mt-20"
        containersx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Support
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              FAQ
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy Policy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Cookie Policy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              User Policy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms & Conditions
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Products
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Men's
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Women's
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Children's
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Accessories
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Shoes
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        className="pt-10 pb-3 bg-gray-800 text-center text-white"
        item
        xs={12}
      >
        <Typography variant="body2" component="p" align="center" pb={7}>
          _____________________________________________________________________________________
        </Typography>
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Urbania. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Marsman.
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
