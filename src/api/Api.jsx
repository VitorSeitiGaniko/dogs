import React from "react";
import PhotoGet from "./endpoints/PhotoGet";
import PhotoPost from "./endpoints/PhotoPost";
import Token from "./endpoints/Token";
import UserPost from "./endpoints/UserPost";

const Api = () => {
  return (
    <div>
      <UserPost />
      <Token />
      <PhotoPost />
      <PhotoGet />
    </div>
  );
};

export default Api;
