import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
  
  let state = props.store.getState().messagesPage;

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  //e = "event"

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                  messagesPage={state}/>
};

export default DialogsContainer;
