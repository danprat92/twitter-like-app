import * as React from 'react';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useStyles from './styles';
import { config } from '../../config';

interface IPublicLayout {
  title: string;
  url: string;
  description: string;
}

const PublicLayout: React.FunctionComponent<IPublicLayout> = ({
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
        <link rel="canonical" href={`${config.FIREBASE_DB_URL}/${url}`} />
      </Helmet>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        {children}
      </Grid>
    </React.Fragment>
  );
};

export default PublicLayout;
