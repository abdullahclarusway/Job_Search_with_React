import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import axios from "axios";
import JobCard from "../JobCard/JobCard";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
function Category() {
  const classes = useStyles();
  const { slug } = useParams();
  // const [data, setData] = useState([]);
  console.log(slug);

  const [offset, setOffset] = useState(0);

  const [perPage, setPerPage] = useState(17);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postData, setPostData] = useState([]);

  useEffect(async () => {
    await axios
      .get(`https://remotive.io/api/remote-jobs?category=${slug}`)
      .then((res) => {
        const data = res.data.jobs;
        const slice = data.slice(offset, offset + perPage);
        const postData = slice.map((item) => (
          <React.Fragment>
            <Grid key={item._id} item xs={12} sm={3}>
              <JobCard data={item} />
            </Grid>
          </React.Fragment>
        ));
        setPageCount(Math.ceil(data.length / perPage));
        setPostData(postData);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offset);
  };
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {postData}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Grid>
  );
}
export default Category;
