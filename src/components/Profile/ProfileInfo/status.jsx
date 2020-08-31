import React from 'react';
import cls from '../../../css/profile.module.css';

class Status extends React.Component {
  state = {
    editMode: false,
    text: 'custom status...'
  }

  edit = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  write = (value) => {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <>
        {this.state.editMode
          ? <input autoFocus={true} onChange={(e)=>this.write(e.target.value)} onBlur={this.edit} value={this.state.text} />
          : <span onDoubleClick={this.edit}>{this.state.text}</span>}
      </>
    )
  }
}

export default Status;
