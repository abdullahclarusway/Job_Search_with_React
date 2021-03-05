import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  fav_button: {
    padding: 10,
    borderRadius: 10,
    position: "fixed",
    top: 15,
    right: "50%",
    backgroundColor: "#11698e",
    zIndex: 1000,
  },
}));
