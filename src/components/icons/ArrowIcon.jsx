import React from "react";
import propTypes from "prop-types";

const ArrowIcon = ({ color, height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <path
      d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"
      fill={color}
    />
  </svg>
);

ArrowIcon.propTypes = {
  color: propTypes.string.isRequired,
  height: propTypes.string,
  width: propTypes.string,
};

ArrowIcon.defaultProps = {
  height: "24",
  width: "24",
};

export default ArrowIcon;
