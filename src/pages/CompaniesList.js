import React, { useState, useEffect } from "react";
import CompanyListItem from "../common/CompanyListItem";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../common/JoblyApi";

function CompanyList() {
  const [searchTerm, setSearchTerm] = useState();
  const [companiesList, setCompaniesList] = useState([]);

  // call the API
  useEffect(() => {
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
      <ul>{companiesList.map(c => <li key={c.handle}><CompanyListItem {...c} /></li>)}</ul>
    </div>
  )
}

export default CompanyList;
