import React from "react";
import axios from "axios";
import { CardComponent } from "../CardComponent";

const endpointGetFilteredUsers = `http://localhost:5000/filterUser?age=23&interestedIn=male&hobbies=read`;

export default function GetFilteredUsers() {
  const [users, setUsers] = React.useState([]);

  const getThemUsers = async (values) => {
    try {
      const { data } = await axios.get(endpointGetFilteredUsers, values);
      console.log("aresponssse", data);
      setUsers(data);
      //   console.log(users);
    } catch (error) {
      return error.response;
    }
  };

  React.useEffect(() => {
    getThemUsers();
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
