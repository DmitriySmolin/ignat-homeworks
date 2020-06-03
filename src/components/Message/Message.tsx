import React from 'react';

import classes from './Message.module.css';
type messagePropsType = {
  name: string;
  text: string;
  time: string;
};
function Message(props: messagePropsType) {
  return (
    <div className={classes.message_container}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.time}>{props.time}</div>
    </div>
  );
}

export default Message;
