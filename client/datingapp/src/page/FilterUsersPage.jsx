import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { utils } from "../utilites/fetch";

export default function FilterUsers() {
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({ age: "", hobbies: "" });
  const endpointGetFilteredUsers = `http://localhost:5000/filterUser?age=${values.age}&interestedIn=female&hobbies=${values.hobbies}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = async () => {
    const response = await axios.get(endpointGetFilteredUsers);
    console.log("This is a response", response);
    console.log("These are values", values);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Search
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Discover people according to your taste
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="age"
            // value={value}
            label="age"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setValues({ ...values, age: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="hobbies"
            label="hobbies"
            type="text"
            // value={value}
            fullWidth
            variant="standard"
            onChange={(e) => {
              setValues({ ...values, hobbies: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSearch}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
