import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
      <div className={s.item}>
          {props.name}
          <br/>
          {props.message}
      </div>
      <div>
          {props.likeCount}<span> like</span>
      </div>
    </div>
  );
};
export default Post;
