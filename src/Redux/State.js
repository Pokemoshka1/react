import {rerender} from '../render.js'

let State = {
  profilePage: {
    tasks: [
      {id: 1, post: 'Выучить реакт', like: 245},
      {id: 2, post: 'Выучить английский', like: 45},
      {id: 3, post: 'Доделать проект', like: 35},
      {id: 4, post: 'Откасить от армии', like: 87},
    ],
    target: [
      {id: 1, post: 'Стать фронтенд разрабом', like: '24'},
      {id: 2, post: 'Устроитсья на работу', like: 11},
      {id: 3, post: 'Накопить на комп', like: 65},
      {id: 4, post: 'Жить до 200лет', like: 89},
    ],
    post: [
      {id: 1, post: 'Я любил дед', like: 54},
      {id: 2, post: 'Картошка пахнет кунжутом', like: 73},
      {id: 3, post: 'Кто какает какашками?', like: 74},
      {id: 4, post: 'Почему ты антон?', like: 7},
    ],
    about_myself: [
      {text: 'Имя', answer: 'Егор'},
      {text: 'Возраст', answer: '25'},
      {text: 'Стиль жизни', answer: 'Жить, пить, курить, умереть'},
      {text: 'О себе', answer: 'Я хороший мальчик, хочу устроиться в фирму и заработать себе на комп ВОЗЬМИТЕ меня пожалуйста'},
    ],
    newPostText: '',
    newTaskText: '',
  },
  messagePage: {
    friends_message: [
      {id: 2, name: 'Света', text: 'Привет'},
    ],
    your_message: [
      {id: 1, user: 'Егор', text: 'Как дела?'},
      {id: 2, user: 'Егор', text: 'Привет'},
      {id: 3, user: 'Егор', text: 'i stupid~'},
      {id: 4, user: 'Егор', text: 'Рррррр'},
    ],
    name: [
      {id: 1, name: 'Егор'},
      {id: 2, name: 'Света'},
      {id: 3, name: 'Андрей'},
      {id: 4, name: 'Аня'},
      {id: 5, name: 'Игорь'},
      {id: 6, name: 'Даня'},
      {id: 7, name: 'Какашка'},
    ],
  },
  newPage: {
    news:[
      {id: 1, name: 'Андрей', text: 'Я покакал', like: 7},
      {id: 2, name: 'Игорь', text: 'Я кибЯрСпортсмЭн', like: 7},
      {id: 3, name: 'Егор', text: 'Я самый умный', like: 7},
      {id: 4, name: 'Катя', text: 'Плак-плак', like: 7},
    ],
  }
}
export let addPost = () => {
  let newPost = {
    id: State.profilePage.post[State.profilePage.post.length-1].id + 1 , post: State.profilePage.newPostText, like: 0
  };
  State.profilePage.post.push(newPost);
  State.profilePage.newPostText = '';
  rerender(State);
}
export let updateNewPostText = (newtext) => {
  State.profilePage.newPostText = newtext;
  rerender(State);
}
export let addTask = () => {
  let newTask = {
    id: State.profilePage.tasks[State.profilePage.tasks.length-1].id + 1, post: State.profilePage.newTaskText, like: 0
  };
  State.profilePage.tasks.push(newTask);
    State.profilePage.newTaskText = '';
  rerender(State);
}
export let updateNewTaskText = (newtext) => {
  State.profilePage.newTaskText = newtext;
  rerender(State);
}
export let addTarget = (posttext) => {
  let newTarget = {
    id: State.profilePage.target[State.profilePage.target.length-1].id + 1, post: posttext, like: 0
  };
  State.profilePage.target.push(newTarget);
  rerender(State);
}
export let addNews = (posttext) => {
  let newNews = {
    id: State.newPage.news[State.newPage.news.length-1].id + 1, text: posttext, like: 0, name: 'Егор'
  };
  State.newPage.news.push(newNews);
  rerender(State);
}
export default State
