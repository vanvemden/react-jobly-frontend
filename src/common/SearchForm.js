import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchForm({ setSearchTerm }) {
  const [term, setTerm] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchTerm(term);
  }

  const handleChange = evt => {
    const { value } = evt.target;
    setTerm(value);
    setSearchTerm(value);
  }

  return (
    <Form inline className="SearchForm my-5" onSubmit={handleSubmit}>
      <FormControl
        type="text"
        id="term"
        name="term"
        value={term}
        placeholder="Enter search term"
        onChange={handleChange} />
      <Button variant="outline-primary" type="submit">Search</Button>
    </Form>
  )
}

export default SearchForm;