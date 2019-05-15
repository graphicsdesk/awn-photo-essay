import React from 'react';
import injectSheet from 'react-jss';
import archieml from 'archieml';
import copyString from './copy';

import Graphic from './Graphic';
import Paragraph from './Paragraph';
import Image from './Image';
import Break from './Break';
import Header from './Header';

const { copy } = archieml.load(
  copyString,
);

const styles = {
  App: {
  },
};

const App = ({ classes }) => {
  return (
    <div className={classes.App}>
      <Graphic slides={copy} />
    </div>
  );
};

export default injectSheet(styles)(App);
