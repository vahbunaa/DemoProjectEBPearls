import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GetUsers from "../utilites/getAllUsers";
import { display } from "@mui/system";

export const CardComponent = ({ _id, age, bio, name }) => {
  // getAllUsers();

  return (
    <Card key={_id} sx={{ width: "30%" }}>
      <div>
        <CardMedia
          component="img"
          image="https://www.whatsappimages.in/wp-content/uploads/2021/02/Beautiful-Girls-Whatsapp-DP-Profile-Images-pics-for-download-300x300.gif"
          alt={name.firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.firstName} {name.lastName},{age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Send Request</Button>
          <Button size="small">Skip</Button>
        </CardActions>
      </div>
    </Card>
  );
};
