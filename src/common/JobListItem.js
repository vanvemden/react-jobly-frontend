import React from "react";
import ApplyButton from "./ApplyButton";

function JobListItem({ title, salary, equity, id }) {
  return (
    <div className="JobListItem card mt-3">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">
            {title}
          </span>
        </h6>
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
        <ApplyButton id={id} />
      </div>
    </div>
  )
}

export default JobListItem;