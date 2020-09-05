import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
    console.log(props)
  const userDate = props.user ? (
    <div>
      <h1>Profile</h1>
      <p>
        {" "}
        <strong>Name:</strong> {props.user.name}
      </p>
      <p>
        <strong>Email:</strong> {props.user.email}
      </p>
      <p>
        <strong>ID:</strong>
        {props.user.id}
      </p>
    </div>
  ) : (
    <h4>Loading...</h4>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">Login</Link> to view this page{" "}
        </h3>
      </div>
    );
  };
  return <div>{props.user ? userDate : errorDiv()}</div>;
};

export default Profile;