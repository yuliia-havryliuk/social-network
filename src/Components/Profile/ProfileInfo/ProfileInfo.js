import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://co12.nevseoboi.com.ua/wallpapers/panoramic/1347913352-3511116-0175977_www.nevseoboi.com.ua.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava description</div>
    </div>
  );
};

export default ProfileInfo;
