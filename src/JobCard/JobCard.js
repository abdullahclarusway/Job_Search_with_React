import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import moment from "moment";
import CardHeader from "@material-ui/core/CardHeader";
import BusinessIcon from "@material-ui/icons/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TimelineIcon from "@material-ui/icons/Timeline";
import CategoryIcon from "@material-ui/icons/Category";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deneme = localStorage.getItem("@FAVORITES");
  console.log(deneme);
  return (
    <Card className={classes.card}>
      <CardHeader
        title={data.title}
        subheader={moment(data.publication_date).format("MMM Do YY")}
      />
      <CardMedia
        className={classes.media}
        image={"https://source.unsplash.com/random/200x200?sig=1"}
      />
      <div
        className={classes.overlay2}
        onClick={() => history.push(`/detail/${id}`, { params: { data } })}
      >
        <Button style={{ color: "black" }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <BusinessCenterIcon />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h3"
        >
          {data.company_name}
        </Typography>
        <CategoryIcon />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {data.category}
        </Typography>
      </div>
      <div className={classes.details}>
        <LocationOnIcon color="disabled" />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          color="textSecondary"
        >
          {data.candidate_required_location}
        </Typography>
        <TimelineIcon color="disabled" />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          color="textSecondary"
        >
          {data.job_type.charAt(0).toUpperCase() + data.job_type.slice(1)}
        </Typography>
      </div>
      {savedjobs ? (
        <Button variant="contained" color="secondary">
          Delete from List
        </Button>
      ) : (
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="add to favorites" onClick={saveJob}>
            <FavoriteIcon />
          </IconButton>

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
              color="secondary"
              variant="contained"
              onClick={() => history.push("/savedjobs")}
            >
              Go to Favorites
            </Button>
            <Button color="secondary" variant="contained" onClick={closeModal}>
              Close
            </Button>
          </Modal>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default JobCard;
