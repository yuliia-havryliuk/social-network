const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Michael",
      image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
    },
    {
      id: 2,
      name: "Juls",
      image: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      id: 3,
      name: "Gilbert",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJTcYFdKdHZCkOxvGGIEEfyF1y9lVQImp6g&usqp=CAU'
    },
    {
      id: 4,
      name: "Anne",
      image: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      id: 5,
      name: "Matthew",
      image: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      id: 6,
      name: "Morela",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJTcYFdKdHZCkOxvGGIEEfyF1y9lVQImp6g&usqp=CAU '
    },
  ],
  messages: [
    {id: 1, message: "Hi You"},
    {id: 2, message: "Hi"},
    {id: 3, message: "Salut"},
    {id: 4, message: "Salve!"},
    {id: 5, message: "hi you!"},
    {id: 6, message: "hello!"},
  ],
  newMessageBody:""
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 1, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = ()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator=(body)=>({type:UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;
