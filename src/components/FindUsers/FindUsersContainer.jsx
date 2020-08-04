import React from 'react';
import cls from '../../css/findusers.module.css';
import * as axios from 'axios';
import User from './user';
import FindUsers from './FindUsers';
import {connect} from 'react-redux';
import {followToggle, getData, changePage} from '../../redux/findusersReducer';

class FindUsersClass extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
      .then(response => {
        this.props.getData(response.data.items, response.data.totalCount);
      })
  }

  changePage = (pagNum) => {
    this.props.changePage(pagNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagNum}&count=${this.props.count}`)
      .then(response => {
        this.props.getData(response.data.items, response.data.totalCount);
      })
  }

  render() {
    return <FindUsers usersArr={this.props.usersArr} totalItems={this.props.totalItems} count={this.props.count} page={this.props.page} changePage={this.changePage} follow={this.props.follow}/>
  }
}

function mapStateToProps(data) {
  return {
    usersArr: data.findusersPage.users,
    page: data.findusersPage.page,
    count: data.findusersPage.count,
    totalItems: data.findusersPage.totalCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (id) => {
      dispatch(followToggle(id));
    },
    getData: (data, total) => {
      dispatch(getData(data, total));
    },
    changePage: (slcPage) => {
      dispatch(changePage(slcPage));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersClass);
