const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// let sum=(a = 0,b =0)=> {
//   return a + b;
// }
// sum(1,5)
let initialState = {
    posts: [
      {id: 1, message: 'Hi, Julie! Nice work :)', name: 'Pablo', likeCount: 45},
      {id: 2, message: "I'm very proud of You!", name: 'MAX', likeCount: 145},
      {id: 3, message: "It's divine!", name: 'ALEX', likeCount: 15},
      {id: 4, message: 'Turn lights off I want to dance!', name: 'Verona', likeCount: 41}
    ],
        newPostText: 'Я пишу...'
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        name: "Jerry",
        likeCount: 67,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
