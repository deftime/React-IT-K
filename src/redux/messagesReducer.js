const SND_MSG = 'SEND_MESSAGE';
const CHG_MSG_TEXT = 'CHANGE_MSG_TEXT';

function messagesReducer(partData, action) {
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
