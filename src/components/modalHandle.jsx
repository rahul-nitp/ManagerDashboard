import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ModalHandler extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleEditTask (event) {
      alert('hi')
    //const taskVal = this.props.data
  }
  render () {
    return (
      <div>
        <Button key={this.props.data.task_id} size='small' onClick={this.handleClickOpen} >
          {this.props.data.task_name}
          </Button>
          
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Task Details For {this.props.data.task_name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.data.task_desc}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleEditTask} color="primary">
              Edit
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    )
  }
}

export default ModalHandler
