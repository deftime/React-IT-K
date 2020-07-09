import {renderDOM} from '../render';

let data = {
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
};

export function addWallPost() {
  let objProt = {
    id: data.profilePage.postData.length + 1,
    message: data.profilePage.newPostText,
    likes: 0
  }

  data.profilePage.postData.push(objProt);
  data.profilePage.newPostText = '';
  renderDOM(data);
};

export function changePostText(text) {
  data.profilePage.newPostText = text;
  renderDOM(data);
}

export function sendMessage() {
  let objProt = {
    id: data.messagesPage.messageData.length + 1,
    text: data.messagesPage.newMsgText,
    line: 'msgTo'
  }

  data.messagesPage.messageData.push(objProt);
  data.messagesPage.newMsgText = '';
  renderDOM(data);
}

export function changeMsgText(text) {
  data.messagesPage.newMsgText = text;
  renderDOM(data);
}

export default data;
