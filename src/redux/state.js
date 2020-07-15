const ADD_WALL_POST = 'ADD_WALL_POST';
const CHG_POST_TEXT = 'CHANGE_POST_TEXT';
const SND_MSG = 'SEND_MESSAGE';
const CHG_MSG_TEXT = 'CHANGE_MSG_TEXT';

let store = {
  _data: {
    profilePage: {
      postData: [
        {id: 1, message: 'Ohh, cool site!', likes: 5 },
        {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
        {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
      ],
      newPostText: 'Enter text here...'
    },
    messagesPage: {
      dialogData: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Svetlana'},
        {id: 5, name: 'Oleg'}
      ],
      messageData: [
        {id: 1, text: 'Message, that come to me!', line: 'msgFrom'},
        {id: 2, text: 'And my answer to it!', line: 'msgTo'},
        {id: 3, text: 'Good messanger!', line: 'msgFrom'},
        {id: 4, text: 'Yes!', line: 'msgTo'}
      ],
      newMsgText: 'Enter your message here...'
    },
    navbar: {
      friendList: [
        {id: 1, name: 'Dimich' },
        {id: 2, name: 'Sash'},
        {id: 3, name: 'Svet'},
        {id: 4, name: 'Andry'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Konstantin'}
      ]
    }
  },
  _callSubscriber() {
  },
  getData() {
    return this._data;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD_WALL_POST') {
      let objProt = {
        id: this._data.profilePage.postData.length + 1,
        message: this._data.profilePage.newPostText,
        likes: 0
      }
      this._data.profilePage.postData.push(objProt);
      this._data.profilePage.newPostText = '';
      this._callSubscriber(this._data);
    } else if (action.type === 'CHANGE_POST_TEXT') {
      this._data.profilePage.newPostText = action.text;
      this._callSubscriber(this._data);
    } else if (action.type === 'SEND_MESSAGE') {
      let objProt = {
        id: this._data.messagesPage.messageData.length + 1,
        text: this._data.messagesPage.newMsgText,
        line: 'msgTo'
      }
      this._data.messagesPage.messageData.push(objProt);
      this._data.messagesPage.newMsgText = '';
      this._callSubscriber(this._data);
    } else if (action.type === 'CHANGE_MSG_TEXT') {
      this._data.messagesPage.newMsgText = action.text;
      this._callSubscriber(this._data);
    }
  }
}

export let addWallPost = () => ({type: ADD_WALL_POST});
export let changePostText = (text) => ({type: CHG_POST_TEXT, text: text});
export let sendMessage = () => ({type: SND_MSG});
export let changeMsgText = (text) => ({type: CHG_MSG_TEXT, text: text});

export default store;
