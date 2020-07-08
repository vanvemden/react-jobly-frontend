import React, { useState, useEffect } from "react";
import CompanyListItem from "./CompanyListItem";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";

function CompanyList() {
  const [searchTerm, setSearchTerm] = useState();
  const [companiesList, setCompaniesList] = useState([]);

  // call the API
  useEffect(() => {
    console.log("Fetching new data from API");
    const fetchCompanies = async term => {
      const res = await JoblyApi.getAllCompanies(term);
      setCompaniesList(res);
    }
    fetchCompanies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="CompanyList">
      <SearchForm setSearchTerm={setSearchTerm} />
      <h1>Companies List</h1>
      <ul>{companiesList.map(c => <li><CompanyListItem {...c} /></li>)}</ul>
    </div>
  )
}

export default CompanyList;
