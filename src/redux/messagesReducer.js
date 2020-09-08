const SND_MSG = 'SEND_MESSAGE';

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
  ]
}

function messagesReducer(partData = defaultData, action) {
  let dataCopy = {...partData};
  dataCopy.messageData = [...partData.messageData];
  switch (action.type) {
    case SND_MSG:
      let objProt = {
        id: partData.messageData.length + 1,
        text: action.msgText,
        line: 'msgTo'
      }
      dataCopy.messageData.push(objProt);
      break;
    default:
      return partData;
  }
  return dataCopy;
}

export let sendMessage = (msgText) => ({type: SND_MSG, msgText});
// export let changeMsgText = (text) => ({type: CHG_MSG_TEXT, text: text});

export default messagesReducer;
