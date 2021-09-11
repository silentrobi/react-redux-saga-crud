import { Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actionType from "../redux/actions";
import Post from '../components/Post';

const BlogPost = (props) => {
    console.log(props);
    const { posts, actions } = props;

    useEffect(() => {
        actions.getPosts();
    }, [])
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                {posts && posts.map((post) =>
                    <Post key={post.id} post={post} />
                )}
                <br />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        posts: state.getPosts.posts,
    })
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getPosts: () => {
            dispatch(actionType.getPosts());
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
