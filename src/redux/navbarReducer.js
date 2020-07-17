let defaultData = {
  friendList: [
    {id: 1, name: 'Dimich' },
    {id: 2, name: 'Sash'},
    {id: 3, name: 'Svet'},
    {id: 4, name: 'Andry'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Konstantin'}
  ]
}

function navbarReducer(partData = defaultData, action) {
  return partData;
}

export default navbarReducer;
