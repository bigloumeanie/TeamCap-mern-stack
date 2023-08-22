import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Input,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost, dislikePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
        <Input>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Input>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            alert("clicked");
          }}
        >
          Submit
        </Button>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(dislikePost(post._id))}
        >
          <ThumbDownAltIcon fontSize="small" /> Dislike {post.dislikeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

// import React from "react";
// import useStyles from './styles';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment'

// const Post = ({ post, setCurrentId }) => {
//     const classes = useStyles();
//     return (
//         <Card className={classes.card}>
//             <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
//             <div className={classes.overlay}>
//                 <Typography variant="h6">{post.creator}</Typography>
//                 <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//             </div>
//             <div className={classes.overlay2}>
//                 <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
//                     <MoreHorizIcon fontSize="default" />
//                 </Button>
//             </div>
//             <div className={classes.details}  >
//                 <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
//             </div>
//             <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
//             <CardContent>
//                 <Typography variant="h5" gutterBottom>{post.message}</Typography>
//             </CardContent>
//             <CardActions className={classes.cardActions}>
//                 <Button size="small" color="primary" onClick={() => { }}>
//                     <ThumbUpAltIcon fontSize="small" />
//                     Like
//                     {post.likeCount}
//                 </Button>
//                 <Button size="small" color="primary" onClick={() => { }}>
//                     <DeleteIcon fontSize="small" />
//                     Delete
//                 </Button>
//             </CardActions>
//         </Card>
//     );
// }

// export default Post;
