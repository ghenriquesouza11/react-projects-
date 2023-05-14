import React from 'react';
import PropTypes from 'prop-types';

function Copy(props) {
  const { stroke } = props;
  return (
    <svg
      className="copy-svg"
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={ stroke }
      strokeWidth="1.272"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <rect
          x="6.5"
          y="6.5"
          width="9"
          height="13"
          rx="1.5"
        />
        <path
          d="M8.5 6C8.5 5.17157 9.17157
           4.5 10 4.5H16C16.8284 4.5 17.5
            5.17157 17.5 6V16C17.5 16.8284
             16.8284 17.5 16 17.5"
        />
      </g>
    </svg>
  );
}

Copy.propTypes = {
  stroke: PropTypes.string.isRequired,
};

export default Copy;
