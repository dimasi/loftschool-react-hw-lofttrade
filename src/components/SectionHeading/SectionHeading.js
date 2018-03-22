import React from 'react';
import './SectionHeading.css';

export const SectionHeading = (props) => {
  return (
    <h4 className="SectionHeading">{props.children}</h4>
  );
}

export default SectionHeading;
