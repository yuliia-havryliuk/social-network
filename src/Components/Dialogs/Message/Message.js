import s from "./../Dialogs.module.css";
import * as React from "react";

const Message = (props) => {
  let newMessage = React.createRef();
  let sendButton = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  );
};

export default Message;
