import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Select, MenuItem, InputLabel } from "@mui/material";

export default function editDialog() {
  return (
    <div>
      <DialogContentText>Edit my details</DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="age"
        value={values.age}
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
        value={values.hobbies}
        fullWidth
        variant="standard"
        onChange={(e) => {
          setValues({ ...values, hobbies: e.target.value });
        }}
      />
      <InputLabel id="interestedIn">Interested In</InputLabel>
      <Select
        labelId="interestedIn"
        id="interestedIn"
        value={values.interestedIn}
        fullWidth
        label="interestedIn"
        onChange={(e) => {
          setValues({ ...values, interestedIn: e.target.value });
        }}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="both">Both</MenuItem>
      </Select>
    </div>
  );
}
