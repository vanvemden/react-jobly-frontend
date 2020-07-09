import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../common/JoblyApi";
import JobListItem from "../common/JobListItem";

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
    <div className="CompanyDetail">
      <h5 className="text-capitalize">{company.name}</h5>
      <p>{company.description}</p>
      <ul>
        {company.jobs.map(j => <li><JobListItem {...j} /></li>)}
      </ul>
    </div>
  )
}

export default CompanyDetail;
