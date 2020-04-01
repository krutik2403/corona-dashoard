import React from "react";
import { Col } from "reactstrap";

const StatsCard = ({ name, stats }) => {
  return (
    <Col md={3}>
      <div className="stats-card">
        <div className="name">{name}</div>
        <div className="count">{stats}</div>
      </div>
    </Col>
  );
};

export default StatsCard;
