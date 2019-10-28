import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Switch,
  Toolbar,
  Typography
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuButton: {
    marginRight: 16
  },
  title: {
    flexGrow: 1
  }
});

const Navigation = ({ reloadShelters }) => {
  const classes = useStyles();
  const isLoggedIn = true;

  return (
    <AppBar position="sticky" elevation={0} square={false}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Latched 24/7
        </Typography>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          onClick={() => reloadShelters()}
        >
          <RefreshIcon />
        </IconButton>
        {isLoggedIn && (
          <Switch
            checked={true}
            onChange={() => {}}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
