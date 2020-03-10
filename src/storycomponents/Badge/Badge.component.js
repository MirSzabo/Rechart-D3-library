import React from 'react';
import './Badge.style.css';
import PropTypes from 'prop-types';
import classNames from "classnames";

export default function Badge({ active }) {
  return <div className={classNames("badge", { active })}>
  {active ? 'active' : 'inactive'}</div>;
}

Badge.propTypes = {
  active: PropTypes.bool.isRequired,
};
