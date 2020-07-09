import React, { useState, useEffect } from "react";
import JobListItem from "../common/JobListItem";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../common/JoblyApi";

function JobsList() {
  const [searchTerm, setSearchTerm] = useState();
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    const fetchJobs = async term => {
      const res = await JoblyApi.getAllJobs(term);
      setJobsList(res);
    }
    fetchJobs(searchTerm);
  }, [searchTerm]);

  return (
    <div className="JobsList">
      <SearchForm setSearchTerm={setSearchTerm} />
      <h1 className="mt-2">Jobs List</h1>
      {jobsList.map(c => <JobListItem key={c.id} {...c} />)}
    </div>
  );
}

export default JobsList;