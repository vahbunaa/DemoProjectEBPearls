import React from "react";
import axios from "axios";
import { CardComponent } from "../components/CardComponent";

const endpointGetAllUsers = "http://localhost:5000/users";

export default function GetUsers() {
  const [users, setUsers] = React.useState([]);

  const getAllUsers = async (values) => {
    try {
      const { data } = await axios.get(endpointGetAllUsers, values);
      console.log("aresponse", data);
      setUsers(data);
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
