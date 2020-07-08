import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobListItem from "./JobListItem";

function CompanyDetail() {
  const [applied, setApplied] = useState(false);
  const [company, setCompany] = useState({ jobs: [] });

  const { handle } = useParams();

  useEffect(() => {
    const fetchCompany = async id => {
      const res = await JoblyApi.getCompany(id);
      setCompany(res);
    }
    fetchCompany(handle);
  }, [applied]);

  return (
    <div className="CompanyDetail">
      <h5 class="text-capitalize">{company.name}</h5>
      <p>{company.description}</p>
      <ul>
        {company.jobs.map(j => <li><JobListItem {...j} /></li>)}
      </ul>
    </div>
  )
}

export default CompanyDetail;
