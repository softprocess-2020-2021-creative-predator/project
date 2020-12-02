import React from 'react';
import classes from './MainContent.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MainContent({children}) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

