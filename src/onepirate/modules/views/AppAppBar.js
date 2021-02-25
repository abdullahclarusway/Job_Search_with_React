import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import logo from "../../../assets/logo1.png";

const styles = (theme) => ({
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  logo: {
    width: 50,
    borderRadius: 50,
  },
});

function AppAppBar(props) {
  const categories = [
    {
      id: 19,
      name: "Software Development",
      slug: "software-dev",
    },
    {
      id: 18,
      name: "Customer Service",
      slug: "customer-support",
    },
    {
      id: 21,
      name: "Design",
      slug: "design",
    },
    {
      id: 28,
      name: "Marketing",
      slug: "marketing",
    },
    {
      id: 30,
      name: "Sales",
      slug: "sales",
    },
    {
      id: 23,
      name: "Product",
      slug: "product",
    },
    {
      id: 33,
      name: "Business",
      slug: "business",
    },
    {
      id: 24,
      name: "Data",
      slug: "data",
    },
    {
      id: 25,
      name: "DevOps / Sysadmin",
      slug: "devops",
    },
    {
      id: 26,
      name: "Finance / Legal",
      slug: "finance-legal",
    },
    {
      id: 27,
      name: "Human Resources",
      slug: "hr",
    },
    {
      id: 29,
      name: "QA",
      slug: "qa",
    },
    {
      id: 31,
      name: "Teaching",
      slug: "teaching",
    },
    {
      id: 32,
      name: "Writing",
      slug: "writing",
    },
    {
      id: 35,
      name: "Medical / Health",
      slug: "medical-health",
    },
    {
      id: 22,
      name: "All others",
      slug: "all-others",
    },
  ];

  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* <div className={classes.left} /> */}
          <img className={classes.logo} src={logo} alt="" />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/premium-themes/onepirate/"
          >
            {"lighthouse"}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Sign Up"}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
