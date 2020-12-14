import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: ` #6A983C`,
  },
  header: {
    background: "white",
  },
});

const navLinks = [
  { title: `Login`, path: `/login` },
  { title: `Sign Up`, path: `/signup` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <NavLink to="/">
              <Home fontSize="large" />
            </NavLink>
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
