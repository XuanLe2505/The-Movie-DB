import { Button, CardActionArea, CardActions } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import apiConfig from "../app/apiConfig";

const MovieCarousel = ({ movies }) => {
  const [movieIndex, setMovieIndex] = useState(0);
  const backgroundImage = apiConfig.originalImage(
    movies[movieIndex]?.backdrop_path
  );

  const posterImage = apiConfig.w500Image(movies[movieIndex]?.poster_path);

  if (!movies[movieIndex]) return <div />;

  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100%"
            image={
              movies[movieIndex].backdrop_path ? backgroundImage : posterImage
            }
            alt={movies[movieIndex]?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movies[movieIndex]?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movies[movieIndex]?.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => setMovieIndex(movieIndex - 1)}
            disabled={movieIndex === 0}
          >
            Prev
          </Button>
          <Button
            onClick={() => setMovieIndex(movieIndex + 1)}
            disabled={movieIndex === movies.length - 1}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCarousel;
