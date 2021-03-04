import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import img from "../assets/logo1.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 32,
    fontWeight: 600,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    margin: 10,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontWeight: 600,
    fontSize: 20,
    backgroundColor: "#3f51b5",
    borderRadius: 10,
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray",
      color: "black",
      textDecoration: "none",
    },
  },
  header: {
    textAlign: "center",
  },

  logo: {
    width: 50,
    borderRadius: 50,
  },
}));

function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <h1 className={classes.header}>Select your category</h1>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
