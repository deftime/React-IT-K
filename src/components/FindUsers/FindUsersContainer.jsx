import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import {followToggle, getData} from '../../redux/findusersReducer';

function mapStateToProps(data) {
  return {
    usersArr: data.findusersPage.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (id) => {
      dispatch(followToggle(id));
    },
    getData: (data) => {
      dispatch(getData(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
