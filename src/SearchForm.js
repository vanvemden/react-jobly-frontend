import React, { useState } from "react";

function SearchForm({ setSearchTerm }) {
  const [term, setTerm] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchTerm(term);
  }

  const handleChange = evt => {
    const { value } = evt.target;
    setTerm(value);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          id="term"
          name="term"
          value={term}
          placeholder="Enter search term"
          onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm;