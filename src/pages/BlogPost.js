import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import * as actionType from "../redux/actions";
import Post from '../components/Post';
import AddPost from "../components/AddPost";

const BlogPost = (props) => {
    const { posts, addedPost, deletedPost, actions } = props;
    const [state, setState] = useState({
        text: ''
    });

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
        if (addedPost || deletedPost) {
            actions.getPosts();
        }
    }, [addedPost, deletedPost])
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
                        handleDelete={handleDeletePost}
                    />
                )}

            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        posts: state.getPosts.posts,
        addedPost: state.addPost.post,
        deletedPost: state.deletePost.post
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
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
