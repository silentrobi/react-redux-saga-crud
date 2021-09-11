import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 500
    },
}));


export const UpdatePostDialog = (props) => {
    const classes = useStyles();
    const { openDialog, handleClose, handleSave, handlePostChange } = props;
    return (
        <div>
            <Dialog classes={{ paper: classes.root }} open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Update post</DialogTitle>
                <DialogContent>
                    <TextField
                        value={openDialog.post.text}
                        onChange={(e) => handlePostChange(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Post"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={openDialog.post.text === ''} onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UpdatePostDialog;
