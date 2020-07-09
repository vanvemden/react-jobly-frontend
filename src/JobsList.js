import React, { useState, useEffect } from "react";
import JobListItem from "./JobListItem";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";

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
      <h1>Jobs List</h1>
      <ul>{jobsList.map(c => <li key={c.id}><JobListItem {...c} /></li>)}</ul>
    </div>
  );
}

export default JobsList;