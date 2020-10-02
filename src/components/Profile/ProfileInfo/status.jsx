import React, {useState, useEffect} from 'react';

function Status(props) {

  let [editMode, setMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status);
  }, [props.status]);

  let edit = (event) => {
    if (editMode === true) {
      setMode(false);
      props.updateStatus(status);
    } else {
      setMode(true);
    }
  }

  // let write = (event) => {
  //   setStatus(event.target.value);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status != this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }
  //
  // state = {
  //   editMode: false,
  //   status: this.props.status
  // }
  //


  return (
    <>
      {editMode
        ? <input autoFocus={true} onBlur={edit} onChange={(event)=>setStatus(event.target.value)} value={status} />
        : <span onDoubleClick={edit}>{status || '[no-status]'}</span>}
    </>
  )
}

export default Status;
