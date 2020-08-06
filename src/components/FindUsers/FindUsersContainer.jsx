import React from 'react';
import * as axios from 'axios';
import FindUsers from './FindUsers';
import {connect} from 'react-redux';
import {follow, getData, changePage, preLoader} from '../../redux/findusersReducer';

class FindUsersClass extends React.Component {

  componentDidMount() {
    this.props.preLoader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
      .then(response => {
        this.props.preLoader(false);
        this.props.getData(response.data.items, response.data.totalCount);
      })
  }

  changePage = (pagNum) => {
    this.props.preLoader(true);
    this.props.changePage(pagNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNum}&count=${this.props.count}`)
      .then(response => {
        this.props.preLoader(false);
        this.props.getData(response.data.items, response.data.totalCount);
      })
  }

  render() {
    return <FindUsers
      usersArr={this.props.usersArr}
      totalItems={this.props.totalItems}
      count={this.props.count}
      page={this.props.page}
      changePage={this.changePage}
      follow={this.props.follow}
      isFetch={this.props.isFetch}
    />
  }
}

function mapStateToProps(data) {
  return {
    usersArr: data.findusersPage.users,
    page: data.findusersPage.page,
    count: data.findusersPage.count,
    totalItems: data.findusersPage.totalCount,
    isFetch: data.findusersPage.isFetch
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

export default connect(mapStateToProps, {follow, getData, changePage, preLoader})(FindUsersClass);
