import React from 'react';
import classes from './Generic.module.css'

const Generic = ({children}) => {
  return (
    <h1 className={classes.h1}>
   
    The Generic {children}
    
    </h1>
  )
}

export default Generic
