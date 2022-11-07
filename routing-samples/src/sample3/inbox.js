import React from "react";
import { useParams } from "react-router-dom";

const BaseInbox = props => {

  let { userId } = useParams();

  return (
    <>
      <h2>Inbox page</h2>
      <h3>Messages for user: {userId} </h3>
    </>
  );
};

export default BaseInbox;
