import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import UserAuthContext from "./UserAuthContext";

function ApplyButton({ id }) {
  const { updateUserJobs, currentUser } = useContext(UserAuthContext);

  const hasApplied = currentUser.jobs.find(job => job.id === id);

  const handleClick = evt => {
    updateUserJobs(id);
  }

  return (
    <Button
      onClick={handleClick}
      className="float-right"
      variant="danger"
      disabled={hasApplied && true}>
      {hasApplied ? "Applied" : "Apply"}
    </Button>
  )
}

export default ApplyButton;