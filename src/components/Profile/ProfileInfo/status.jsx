import React from 'react';

class Status extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  state = {
    editMode: false,
    status: this.props.status
  }

  edit = (event) => {
    if (this.state.editMode === true) {
      this.setState({
        editMode: !this.state.editMode
      })
      this.props.updateStatus(this.state.status);
    } else {
      this.setState({
        editMode: !this.state.editMode
      })
    }
  }

  write = (event) => {
    this.setState({
      status: event.target.value
    })
  }

  render() {
    return (
      <>
        {this.state.editMode
          ? <input autoFocus={true} onBlur={this.edit} onChange={this.write} value={this.state.status} />
          : <span onDoubleClick={this.edit}>{this.props.status || '[no-status]'}</span>}
      </>
    )
  }
}

export default Status;
