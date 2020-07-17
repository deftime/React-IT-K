const SND_MSG = 'SEND_MESSAGE';
const CHG_MSG_TEXT = 'CHANGE_MSG_TEXT';

let defaultData = {
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
}

function messagesReducer(partData = defaultData, action) {
  switch (action.type) {
    case SND_MSG:
      let objProt = {
        id: partData.messageData.length + 1,
        text: partData.newMsgText,
        line: 'msgTo'
      }
      partData.messageData.push(objProt);
      partData.newMsgText = '';
      break;
    case CHG_MSG_TEXT:
      partData.newMsgText = action.text;
      break;
    default:
      return partData;
  }
  return partData;
}

export let sendMessage = () => ({type: SND_MSG});
export let changeMsgText = (text) => ({type: CHG_MSG_TEXT, text: text});

export default messagesReducer;
