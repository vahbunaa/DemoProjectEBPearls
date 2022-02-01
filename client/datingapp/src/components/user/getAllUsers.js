import React from "react";
import axios from "axios";
import { CardComponent } from "../CardComponent";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../redux/slice/userSlice";
import { utils } from "../../utilites/fetch";

// const endpointGetAllUsers = "http://localhost:5000/users";

export default function GetUsers() {
  // const [users, setUsers] = React.useState([]);
  const users = useSelector((state) => {
    return state.user.users;
  });
  const dispatch = useDispatch();

  const getAllUsers = async () => {
    try {
      // const { data } = await axios.get(endpointGetAllUsers);
      const data = await utils.fetchData("/users");
      // console.log(data);

      dispatch(setUsers(data));
      //   console.log(users);
    } catch (error) {
      return error.response;
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        margin: "4rem auto",
        padding: "1rem",
      }}
    >
      {users.map((user) => {
        return <CardComponent key={user._id} {...user} />;
      })}
    </div>
  );
}
