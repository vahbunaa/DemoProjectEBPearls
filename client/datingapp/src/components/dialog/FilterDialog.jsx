import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { utils } from "../../utilites/fetch";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../redux/slice/userSlice";
import { Select, MenuItem, InputLabel } from "@mui/material";
import EditDialog from "./EditDialog";
// import { MenuItem } from "@mui/material";

export default function FilterUsers() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [values, setValues] = React.useState({
    age: "",
    hobbies: "",
    interestedIn: "",
  });
  const url = `/filterUser?age=${values.age}&interestedIn=${values.interestedIn}&hobbies=${values.hobbies}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = async () => {
    // const response = await axios.get(url);
    const filteredUsers = await utils.fetchData(url);
    // console.log(response);
    const updatedUsers = filteredUsers.filter((filteredUser) => {
      // let temp = [];
      let usr = users.find((user) => {
        return user._id === filteredUser._id;
      });
      return usr;
    });
    console.log("last ko ho", updatedUsers);
    dispatch(setUsers(updatedUsers));
    handleClose();
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSearch}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <EditDialog />
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
