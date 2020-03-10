import React from 'react';
import "./Card.style.css";
import Badge from "../Badge/Badge.component"
import PropTypes from 'prop-types';

export default function Card({title}) {
  return <div className="card">
      <h2>{title}</h2>
<Badge active/>
  </div>;
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
  };
  