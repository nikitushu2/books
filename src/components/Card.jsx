import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import {useState} from "react";

export default function SingleCard(props) {
    const {url, name, genres, author, rating} = props;
    const [stars, setStars] = useState(Number(rating))
  return (
    <Card sx={{ maxWidth: 215 }}>
        <CardMedia
          component="img"
          height="250"
          image={url}
          alt={name}
        />
        <CardContent sx={{ height: 175 }}>
            {genres.map(genre => (
                <Box key={genre} sx={{display: 'inline-block', border: '1px solid #444', borderRadius: '15px', padding: '0px 5px'}}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold'}}>
                {genre}
                </Typography>
                </Box>
            ))
            }
          <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px'}} component="div">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            {author}
          </Typography>
        </CardContent>
      <CardActions>
        <Rating name="read-only" value={stars} readOnly />
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}