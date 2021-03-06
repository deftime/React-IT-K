import React from 'react';
import FindUsers from './FindUsers';
import {connect} from 'react-redux';
import {changePage, setUsers, toggleFollow} from '../../redux/findusersReducer';

class FindUsersClass extends React.Component {

  componentDidMount() {
    this.props.setUsers(this.props.page, this.props.count);

    // this.props.preLoader(true);
    // requestAPI.getUsers(this.props.page, this.props.count)
    // .then(data => {
    //   this.props.preLoader(false);
    //   this.props.getData(data.items, data.totalCount);
    // })

    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
    //   .then(response => {
    //     this.props.preLoader(false);
    //     this.props.getData(response.data.items, response.data.totalCount);
    //   })
  }

  changePage = (pagNum) => {
    this.props.changePage(pagNum);
    this.props.setUsers(pagNum, this.props.count);

    // this.props.preLoader(true);
    // this.props.changePage(pagNum);
    // requestAPI.getUsers(pagNum, this.props.count)
    // .then(data => {
    //   this.props.preLoader(false);
    //   this.props.getData(data.items, data.totalCount);
    // })

    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNum}&count=${this.props.count}`, {withCredentials: true})
    //   .then(response => {
    //     this.props.preLoader(false);
    //     this.props.getData(response.data.items, response.data.totalCount);
    //   })
  }

  render() {
    return <FindUsers
      usersArr={this.props.usersArr}
      totalItems={this.props.totalItems}
      count={this.props.count}
      page={this.props.page}
      changePage={this.changePage}
      isFetch={this.props.isFetch}
      buttonUserId={this.props.buttonUserId}
      followFetch={this.props.followFetch}
      toggleFollow={this.props.toggleFollow}
    />
  }
}

function mapStateToProps(data) {
  return {
    usersArr: data.findusersPage.users,
    page: data.findusersPage.page,
    count: data.findusersPage.count,
    totalItems: data.findusersPage.totalCount,
    isFetch: data.findusersPage.isFetch,
    buttonUserId: data.findusersPage.isFollowing.id,
    followFetch: data.findusersPage.isFollowing.fetch
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     follow: (id) => {
//       dispatch(followToggle(id));
//     },
//     getData: (data, total) => {
//       dispatch(getData(data, total));
//     },
//     changePage: (slcPage) => {
//       dispatch(changePage(slcPage));
//     },
//     preLoader: (loader) => {
//       dispatch(preLoader(loader));
//     }
//   }
// }

export default connect(mapStateToProps, {changePage, setUsers, toggleFollow})(FindUsersClass);
