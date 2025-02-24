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
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const images = [
  {
    url:
      "https://media.npr.org/assets/img/2017/06/23/tri-breastfeeding_custom-7dba21ccb308a4556d7caf9176765e9f97cc6028-s800-c85.jpg",
    title: "Breastfeeding Mothers",
    width: "100%"
  },
  {
    url: "https://www.nursingexplorer.com/img/articles/careers/42343242.jpg",
    title: "Lactation Professionals",
    width: "100%"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

export default ({ setIsProvider }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={images[0].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: images[0].width,
          height: '50vh'
        }}
        onClick={() => setIsProvider(false)}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[0].url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {images[0].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>

      <ButtonBase
        focusRipple
        key={images[1].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        onClick={() => setIsProvider(true)}
        style={{
          width: images[1].width,
          height: '50vh'
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[1].url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {images[1].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};
