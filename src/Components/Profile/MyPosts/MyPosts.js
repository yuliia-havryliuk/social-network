import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post id={post.id} message={post.message} name={post.name} likeCount={post.likeCount}/>
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        {/* newPostElement ссилається на textarea*/}
      </div>
      <div>
        <button onClick={onAddPost}> Add Post</button>
        {/*callBack ми віддаємо кнопці свою функцію. функція в js є об'єктом, об'єкт можна визвати або передати комусь іншому*/}
      </div>
      <div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
