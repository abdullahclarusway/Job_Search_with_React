import React, { useState } from "react";

const SavedJobs = () => {
  const [jobList, setJobList] = useState([]);
  const res = JSON.parse(localStorage.getItem("FAVORITES"));
  const len = res.length;
  console.log(len);

  return (
    <div>
      {res.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default SavedJobs;
