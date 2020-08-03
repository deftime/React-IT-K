import React from 'react';
import cls from '../../css/findusers.module.css';
import User from './user';
import * as axios from 'axios';

class FindUsers extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.getData(response.data.items);
      })
  }

  render() {
    return (
      <div className={cls.main}>
        <div className={cls.inner}>
          {this.props.usersArr.map( user => <User key={user.id} id={user.id} name={user.name} status={user.status} country={user.country} city={user.city} follow={user.follow} followChange={this.props.follow} ava={user.photos.small} /> )}
          <div className={cls.moreButton}>
            <button>Show more...</button>
          </div>
        </div>
      </div>
    )
  }
}

// function findUsers(props) {
//
//   function showUsers() {
//     // if (props.usersArr.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(response => {
//           props.getData(response.data.items);
//         })
//     // }
//   }
//
//   let users = props.usersArr.map( user => <User key={user.id} id={user.id} name={user.name} status={user.status} country={user.country} city={user.city} follow={user.follow} followChange={props.follow} ava={user.photos.small} /> );
//
//   return (
//     <div className={cls.main}>
//       <div className={cls.inner}>
//         {users}
//         <div className={cls.moreButton}>
//           <button onClick={showUsers}>Show more...</button>
//         </div>
//       </div>
//     </div>
//   )
// };

export default FindUsers;
