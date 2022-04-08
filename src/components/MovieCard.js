import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import apiConfig from "../app/apiConfig";

function ProductCard({ movie }) {
  const backgroundImage = apiConfig.originalImage(movie.backdrop_path);
  movie.backgroundImage = backgroundImage;
  const posterImage = apiConfig.w500Image(movie.poster_path);
  movie.posterImage = posterImage;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            movie.backgroundImage ? movie.backgroundImage : movie.posterImage
          }
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body" component="div" noWrap>
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
