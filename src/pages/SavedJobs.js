import React from "react";
import JobCard from "../components/JobCard/JobCard";
import { Grid } from "@material-ui/core";
import useStyles from "../components/JobCard/styles";

const SavedJobs = () => {
  const classes = useStyles();
  const res = JSON.parse(localStorage.getItem("FAVORITES"));
  const len = res.length;
  console.log(res);
  console.log(len);

  return (
    <div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {res?.map((item) => (
          <Grid key={item._id} item xs={12} sm={3}>
            <JobCard data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SavedJobs;
