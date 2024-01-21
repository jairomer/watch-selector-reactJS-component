import React from 'react';
import classes from './App.module.css';

const TimeSection = (props) => {
    return (
        <div className={classes.TimeSection}>
          <p>{`${props.ClockHour}:${props.CurrentMin}`}</p>
        </div>
    );
};

export default TimeSection;