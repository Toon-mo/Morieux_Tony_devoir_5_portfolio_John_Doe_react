import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Progress() {
  return (
    <div>
      <span>HTML 5 90%</span>
      <ProgressBar variant="danger" now={90} />
      <span>CSS 3 80%</span>
      <ProgressBar variant="info" now={80} />
      <span>JAVASCRIPT 70%</span>
      <ProgressBar variant="warning" now={70} />
      <span>PHP 60%</span>
      <ProgressBar variant="success" now={60} />
      <span>REACT 50%</span>
      <ProgressBar variant="primary" now={50} />
    </div>
  );
}

export default Progress;
