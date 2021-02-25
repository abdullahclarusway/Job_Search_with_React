import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import axios from "axios";
import JobCard from "../JobCard/JobCard";
function Category() {
  const classes = useStyles();
  const { slug } = useParams();
  const [data, setData] = useState([]);
  console.log(slug);
  useEffect(async () => {
    await axios
      .get(`https://remotive.io/api/remote-jobs?category=${slug}`)
      .then((res) => {
        console.log(res.data.jobs);
        setData(res.data.jobs.slice(1, 20));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {data.map((item) => (
        <Grid key={item._id} item xs={12} sm={3}>
          <JobCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
}
export default Category;
