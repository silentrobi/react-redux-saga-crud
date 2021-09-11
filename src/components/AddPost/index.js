import { TextField, Button } from '@material-ui/core'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import * as actionType from "../../redux/actions";

const useStyles = makeStyles({
    root: {
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});


const AddPost = (props) => {
    const classes = useStyles();
    const { state, handleAddPost, handleStateChange } = props;

    return (
        <div className={classes.root}>
            <TextField
                fullWidth
                value={state.text || ''}
                onChange={(e) => handleStateChange({
                    ...state,
                    text: e.target.value
                })} />
            <br />
            <Button
                disabled={state.text === ''}
                onClick={handleAddPost}
            >
                Add
            </Button>
        </div>
    )
}

export default AddPost;