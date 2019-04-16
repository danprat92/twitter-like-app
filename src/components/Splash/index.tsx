import * as React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import './index.css';
import { config } from '../../config';

interface ISplash {
  title: string;
  url: string;
  description: string;
}

const Splash: React.FunctionComponent<ISplash> = ({
  title,
  url,
  description,
}) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="Description" content={description} />
      <link rel="canonical" href={`${config.FIREBASE_DB_URL}/${url}`} />
    </Helmet>
    <Grid container justify="center" alignItems="center" className="container">
      <LinearProgress className="loader" color="primary" />
    </Grid>
  </React.Fragment>
);

export default Splash;
