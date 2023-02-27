import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import './Card.css'
import { format } from "date-fns";




export default function RecipeReviewCard(props) {
 
  
  var date = new Date(props.url.user.updated_at);
  
  var formattedDate = format(date, "MMMM do, yyyy ");
  
 
  return (
    <Card 
     onClick={()=>props.getId(props.url.id)}
     className='Card'
       sx={{maxWidth: 345 }}>
            <div className='headerDiv'>
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="">
            <img src={props.url.user.profile_image.medium} alt='profile'></img>
          </Avatar>
        }
        
        title={props.url.user.first_name}
        subheader={formattedDate}
      />
            <IconButton sx={{ color: red[500] }}  aria-label="add to favorites">
         
        </IconButton>
            </div>
      
      
      <CardMedia
      onClick={props.onclick}
        component="img"
        height="auto"
        image={props.url.urls.regular}
        
      />
 
      <CardActions disableSpacing>
       
        <IconButton aria-label="share">
        
        </IconButton>
    
      </CardActions>
      
   
    </Card>
  );
}
