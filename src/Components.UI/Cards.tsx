import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function MediaCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/public/domino-164_6wVEHfI-unsplash.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <div className="flex items-center my-2 mx-3">
        <span className="w-5 h-5 rounded-full bg-orange-700 mr-2 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-red-700 mr-2 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-yellow-700 mr-2 cursor-pointer" />
      </div>
      <div className="flex justify-between items-center m-2">
        <span>250.000$</span>
        <img
          src="/public/domino-164_6wVEHfI-unsplash.jpg"
          width={"50px"}
          height={"50px"}
          className="rounded-full h-10 w-10"
        />
      </div>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
