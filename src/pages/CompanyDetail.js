import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../common/JoblyApi";
import JobListItem from "../common/JobListItem";
import Jumbotron from "react-bootstrap/Jumbotron"

function CompanyDetail() {
  const [company, setCompany] = useState({ jobs: [] });

  const { handle } = useParams();

  useEffect(() => {
    const fetchCompany = async id => {
      const res = await JoblyApi.getCompany(id);
      setCompany(res);
    }
    fetchCompany(handle);
  }, [handle]);

  return (
    <div className="CompanyDetail my-5">
      <Jumbotron>
        <h5 className="text-capitalize">{company.name}</h5>
        <p>{company.description}</p>
      </Jumbotron>
      {company.jobs.map(j => <JobListItem {...j} />)}
    </div>
  )
}

export default CompanyDetail;
