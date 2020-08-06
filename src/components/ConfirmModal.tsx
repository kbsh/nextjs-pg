import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

interface Props {
  open: boolean;
  title: string;
  message: string;
  handleClose: () => void;
  handleExec: () => void;
}

export default function ConfirmModal(props: Props) {
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={props.handleExec} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
