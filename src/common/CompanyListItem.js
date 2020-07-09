import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function CompanyListItem({ handle, name, description, logo_url }) {
  return (
    <Card className="CompanyListItem">
      <Card.Body>
        <Card.Title><Link to={`/companies/${handle}`}>{name}</Link></Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CompanyListItem;