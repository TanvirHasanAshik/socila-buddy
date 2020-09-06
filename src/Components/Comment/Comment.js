import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Comment.css'


const Comment = (props) => {
    const{name, email, body} = props.comment;
    const image = props.image;
    let url = '';
    for (let i = 0; i < image.length; i++) {
         url = image[i].thumbnailUrl;
    }



    return (
        <div className="commentBody">
            <div className="postData"> 
                <Card >
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <img src={url} alt=""/>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: {name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="h3">
                        Email: {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Comments: {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Comment;