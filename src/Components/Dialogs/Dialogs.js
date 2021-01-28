import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      image={dialog.image}
      message={dialog.message}
    />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  debugger;

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  //e = "event"

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.dialogsMessages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              />
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
