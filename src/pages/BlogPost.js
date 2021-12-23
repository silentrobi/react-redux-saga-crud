import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import * as actionType from "../redux/actions";
import Post from '../components/Post';
import AddPost from "../components/AddPost";
import UpdatePostDialog
    from '../components/UpdatePost';

const BlogPost = (props) => {
    const { posts, addedPost, deletedPost, updatedPost,  actions } = props;
    const [state, setState] = useState({
        text: ''
    });

    const [openDialog, setOpenDialog] = useState({
        open: false,
        post: {}
    });

    const handleCloseDialog = () => {
        setOpenDialog({
            ...openDialog,
            open: false
        });
    };

    const handleOpenDialog = (post) => {
        setOpenDialog({
            open: true,
            post
        })
    };

    const handleOpenDialogPostChange = (value) => {
        setOpenDialog({
            ...openDialog,
            post: {
                ...openDialog.post,
                text: value
            }
        })
    };

    const handleAddPost = () => {
        const _id = uuidv4();
        console.log(_id);
        const post = {
            id: _id,
            text: state.text
        }
        actions.addPost(post);

        cleanState();
    };

    const handleSavePost = () => {

        actions.updatePost(openDialog.post);
        setOpenDialog({
            ...openDialog,
            open: false
        });
    };

    const handleDeletePost = (id) => {
        actions.deletePost(id);
    };

    const cleanState = () => {
        setState({
            text: ''
        })
    };

    useEffect(() => {
        actions.getPosts();
    }, []);
    useEffect(() => {
        if (addedPost || updatedPost ||deletedPost) {
            actions.getPosts();
        }
    }, [addedPost, updatedPost, deletedPost])

    
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <AddPost
                    state={state}
                    handleAddPost={handleAddPost}
                    handleStateChange={setState}
                />
                {posts && posts.map((post) =>
                    <Post
                        key={post.id}
                        post={post}
                        handleOpen={handleOpenDialog}
                        handleDelete={handleDeletePost}
                    />
                )}

            </Grid>
            <UpdatePostDialog
                openDialog={openDialog}
                handleClose={handleCloseDialog}
                handleSave={handleSavePost}
                handlePostChange={handleOpenDialogPostChange}
            />
        </Grid>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        posts: state.getPosts.posts,
        addedPost: state.addPost.post,
        deletedPost: state.deletePost.post,
        updatedPost: state.updatePost.post
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getPosts: () => {
            dispatch(actionType.getPosts());
        },
        addPost: (payload) => {
            dispatch(actionType.addPost(payload));
        },
        deletePost: (payload) => {
            dispatch(actionType.deletePost(payload));
        },
        updatePost: (payload) => {
            dispatch(actionType.updatePost(payload));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
