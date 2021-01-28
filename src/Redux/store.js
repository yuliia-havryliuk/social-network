import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store= {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, Julie! Nice work :)', name: 'Pablo', likeCount: 45},
                {id: 2, message: "I'm very proud of You!", name: 'MAX', likeCount: 145},
                {id: 3, message: "It's divine!", name: 'ALEX', likeCount: 15},
                {id: 4, message: 'Turn lights off I want to dance!', name: 'Verona', likeCount: 41}
            ],
            newPostText: 'Я пишу...'
        },

        messagesPage: {
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

        },

    },
    _callSubscriber() {
        console.log('state changed') //метод ето функция которая пренадлежит обьекту
    },
    getState(){
        return this._state; //що звернутися до свойства або метода об'єкта зліва слід написати this
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){ //action це об'єкт, який описує яку дію зробити, має текстовий type і в ньомубуде назва дії type:'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
        }

}




window.state = store;

    // коли викликають функцію subscribe - сюди приходить observer і ми присвоюємо
    // rerenderEntireTree() щось, випригуємо на родинний рівень функцій і шукаємо яким значенням
    // вона наділена , хм вона виводить данні в консоль, а ми їй присваюємо функцію observer
    // і тепер переменна rerenderentiretree не є тою якою була і не ссилається на функцію виведення в консоль,
    // вона ссилається на функцію яка їй прийшла  - observer
    // а в параметрі щоїй прийшло? subscribe а де в нас sebcribe? в index.js, відповдіно там же
    // функція subscribe передає значення rerenderentiretree
    // і потім  в updatenewposttest коли нам треба цю функцію задіяти - ми викликаємо її
    // і в скобочках записуємо

export default store;