import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import moment from "moment";
import useStyles from "./styles";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-modal";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import TimerTwoToneIcon from "@material-ui/icons/TimerTwoTone";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const JobCard = ({ data }) => {
  const { savedjobs } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const id = data.id;
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const addJob = async () => {
    let savedJobList = await localStorage.getItem("FAVORITES");
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);
    const updatedJobList = [...savedJobList, data];
    localStorage.setItem("FAVORITES", JSON.stringify(updatedJobList));
  };

  const saveJob = () => {
    setIsOpen(true);
    addJob();
  };

  const deleteJob = async () => {
    let list = await localStorage.getItem("FAVORITES");
    list = list == null ? [] : JSON.parse(list);
    const index = list.findIndex((x) => x.id === data.id);
    if (index > -1) {
      list.splice(index, 1);
      localStorage.setItem("FAVORITES", JSON.stringify(list));
      history.push("/savedJobs");
    }
  };

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <h2 className={classes.header__title}>{data.title}</h2>
        <p>{moment(data.publication_date).format("Do MMM YY")}</p>
      </div>
      <div className={classes.details}>
        <AccountBalanceTwoToneIcon />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h5"
        >
          {data.company_name} - {data.category}
        </Typography>
      </div>
      <div className={classes.details}>
        <LocationOnIcon color="disabled" />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h5"
          color="textSecondary"
        >
          {data.candidate_required_location}
        </Typography>
      </div>
      <div className={classes.details}>
        <TimerTwoToneIcon color="disabled" />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h5"
          color="textSecondary"
        >
          {data.job_type.charAt(0).toUpperCase() + data.job_type.slice(1)}
        </Typography>
      </div>
      {savedjobs ? (
        <Button variant="contained" color="secondary" onClick={deleteJob}>
          Delete from List
        </Button>
      ) : (
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<FavoriteIcon />}
            onClick={saveJob}
          >
            Save
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Added to Favorites
            </h2>
            <Button
              color="primary"
              variant="contained"
              onClick={() => history.push("/savedjobs")}
            >
              Go to Favorites
            </Button>
            <Button color="default" variant="contained" onClick={closeModal}>
              Close
            </Button>
          </Modal>
          <div
            className={classes.overlay2}
            onClick={() => history.push(`/detail/${id}`, { params: { data } })}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              startIcon={<MoreHorizIcon />}
            >
              More
            </Button>
          </div>
        </CardActions>
      )}
    </Card>
  );
};

export default JobCard;
