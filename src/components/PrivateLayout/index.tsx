import * as React from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Helmet } from 'react-helmet';
import useStyles from './styles';
import { config } from '../../config';

interface IPrivateLayout {
  title: string;
  url: string;
  description: string;
}

const PrivateLayout: React.FunctionComponent<IPrivateLayout> = ({
  children,
  title,
  url,
  description,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <link rel="canonical" href={`${config.FIREBASE_DB_URL}${url}`} />
      </Helmet>
      <Grid container className={classes.container}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.innerContainer}
        >
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PrivateLayout;
