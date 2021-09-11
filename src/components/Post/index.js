import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        margin: theme.spacing(2, 0)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 16,
    },
}));

const Post = (props) => {
    const { post, handleDelete } = props;

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="primary" gutterBottom>
                    {post.id}
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                    {post.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                {" "}
                <Button onClick={() => handleDelete(post.id)} size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Post
