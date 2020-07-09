import React from "react";
import { Link } from "react-router-dom";

function CompanyListItem({ handle, name, description, logo_url }) {
  return (
    <Link className="CompanyListItem card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">
            {name}
          </span>
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default CompanyListItem;