import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        <div>
            <img src={props.image}/>
        </div>
        <div>
            {props.message}
        </div>
    </div>
  );
};

export default DialogItem;
