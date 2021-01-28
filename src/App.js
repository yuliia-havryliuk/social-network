import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
debugger;
const App = (props) => {
    debugger;
    return (
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile store={props.store}/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} />
            {/*dialogsState ЦЕ ЗАМІСТЬ props ТОМУ СЛІД ЗАМІНИТИ ВСЮДИ, ЩО Є В state
            пропси компоненти profile зберігаються в в пропсах App.js в документі state в profilepage*/}
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={()=><Settings/>} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
  );
};
export default App;
