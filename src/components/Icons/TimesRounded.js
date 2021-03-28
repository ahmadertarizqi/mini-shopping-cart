import * as React from "react";

function SvgTimesRounded(props) {
  return (
    <svg className="times-rounded_svg__svg-icon" viewBox="0 0 20 20" {...props}>
      <path
        fill="#ddddd"
        d="M12.71 7.291a.383.383 0 00-.542 0L10 9.458 7.833 7.291a.383.383 0 10-.542.541L9.458 10 7.29 12.167a.384.384 0 000 .542c.15.149.392.149.542 0L10 10.542l2.168 2.167a.384.384 0 00.542 0 .386.386 0 000-.542L10.542 10l2.168-2.168a.385.385 0 000-.541zM10 1.188a8.812 8.812 0 100 17.625 8.812 8.812 0 000-17.625zm0 16.858a8.046 8.046 0 110-16.092 8.046 8.046 0 010 16.092z"
      />
    </svg>
  );
}

export default SvgTimesRounded;
