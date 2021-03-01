import React, { useState } from "react";
import JobCard from "../JobCard/JobCard";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "../JobCard/styles";

const SavedJobs = () => {
  const classes = useStyles();
  const [jobList, setJobList] = useState([]);
  const res = JSON.parse(localStorage.getItem("FAVORITES"));
  const len = res.length;
  console.log(len);

  return (
    <div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {res.map((item) => (
          <JobCard data={item} />
        ))}
      </Grid>
    </div>
  );
};

export default SavedJobs;
