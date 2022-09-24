import React from "react";
import '../styles/User.css';

function User(props) {
  return (
    <div className="user-card">
      <div className="fields">
        <h2 className="name" style={props.user.formatted}>Name: {props.user.profile.name !== undefined && props.user.profile.name !== '' ? props.user.profile.name : "undefined"}</h2>
        <h4 className="about" style={props.user.formatted}>About: {props.user.profile.about !== undefined && props.user.profile.about !== '' ? props.user.profile.about : "undefined"}</h4>
      </div>
      <div className="fields">
        <p style={props.user.formatted}>Username: {props.user.username !== undefined && props.user.username !== '' ? props.user.username : "undefined"}</p>
        <p style={props.user.formatted}>Email: {props.user.email !== undefined && props.user.email !== '' ? props.user.email : "undefined"}</p>
        <p style={props.user.formatted}>DOB: {props.user.profile.dob !== undefined && props.user.profile.dob !== '' ? props.user.profile.dob : "undefined"}</p>
        <p style={props.user.formatted}>Address: {props.user.profile.address !== undefined && props.user.profile.address !== '' ? props.user.profile.address : "undefined"}</p>
        <p style={props.user.formatted}>Company: {props.user.profile.company !== undefined && props.user.profile.company !== '' ? props.user.profile.company : "undefined"}</p>
        <p id="no-border" style={props.user.formatted}>Role(s): {props.user.roles !== undefined && props.user.roles !== [] && props.user.roles !== '' ? props.user.roles.map((role) => <span>{role}, </span>) : "undefined"}</p>
      </div>
    </div>
  );
}

export default User;
