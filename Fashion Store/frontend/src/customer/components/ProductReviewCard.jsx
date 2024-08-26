import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
const ProductReviewCard = () => {
  return (
    <div className="text-left">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Grid
                  item
                  xs={1}
                  sx={{
                    marginRight: -2.5,
                  }}
                >
                  <Box>
                    <Avatar
                      className="text-white"
                      sx={{
                        width: 25,
                        height: 25,
                        fontSize: 15,
                        bgcolor: "#4F46E5",
                        border: "1px solid grey",
                      }}
                    >
                      A
                    </Avatar>
                  </Box>
                </Grid>
                <p className="font-normal text-gray-700 text-lg pl-2 pr-3">
                  Ahmad
                </p>
                <p className="opacity-90 text-xs pt-2 pl-20"> July 14, 2024</p>
              </div>
            </div>
          </div>
          <Rating
            readOnly
            value={4.5}
            precision={0.5}
            name="half-rating"
            icon={<Star style={{ color: yellow[600] }} />}
            emptyIcon={<Star style={{ color: "#d0d0d0" }} />}
            sx={{
              "& .MuiRating-iconFilled": {
                color: yellow[600],
              },
              "& .MuiRating-iconHover": {
                color: yellow[600],
              },
              "& .MuiRating-iconEmpty": {
                color: "#d0d0d0",
              },
            }}
          />
          <p className="font-normal text-gray-700 text-sm">
            Fantastic crafting, excellent products 10/10.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
