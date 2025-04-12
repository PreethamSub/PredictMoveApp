import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../provider/authProvider";
import { isAdmin, getAllUsers } from "../client/client";

import Sidebar from "../components/sidebar.jsx";
import UserList from "../components/userList.jsx";


export default function Dashboard() {
  const [users, setUsers] = useState();
  const { token } = useAuth();

  let Admin = false;
  isAdmin(token).then(function(res) {
    if(res.data.isAdmin){
      Admin = true;
    }
  }).catch((e) => {
    console.log(e);
  });

  let data = []
  
  
  console.log(data);


  let navigate = useNavigate();
  React.useEffect(() => {
    if(!Admin){
      navigate("/");
    } else {
      getAllUsers(token).then(function(res) {
        console.log(res.data)
        data = res.data;
      }).then(function(res){
        setUsers(data);
      }).then(function(res){
        console.log(users)
      }).catch((e) => {
        console.log(e);
      });
      setUsers(data);
    }
  }, [Admin])

  return (
    <>
      <Sidebar
        Children={[
          { element: UserList, props: {data: users} }
        ]}
      />
    </>
  );
}
