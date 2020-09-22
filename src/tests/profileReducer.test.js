import profileReducer, {addWallPost} from '../redux/profileReducer';

test('add new post in profile page', ()=>{
  // Data for test
  let data = {
    postData: [
      {id: 1, message: 'Ohh, cool site!', likes: 5 },
      {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
      {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
    ]
  };
  let action = addWallPost('New added text...');
  // Action
  let result = profileReducer(data, action);
  // Exeption (result)
  expect(result.postData.length).toBe(4);
});

test('post text should be correct', ()=>{
  // Data for test
  let data = {
    postData: [
      {id: 1, message: 'Ohh, cool site!', likes: 5 },
      {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
      {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
    ]
  };
  let newText = 'New added text...';
  let action = addWallPost(newText);
  // Action
  let result = profileReducer(data, action);
  // Exeption (result)
  expect(result.postData[3].message).toBe(newText);
})
