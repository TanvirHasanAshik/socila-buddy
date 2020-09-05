import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Data.css'
import { useHistory } from 'react-router-dom';


const Data = (props) => {
  const {title, body, id} = props.data;
  const sliceTitle = title.slice(0, 20)
  const sliceBody = body.slice(0, 100)
  const history = useHistory();
  function sendData(id){
    history.push(`/post/${id}`);
  }
  return (
    <div className="body">
      <div className="postData"> 
        <Card >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {sliceTitle}
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {sliceBody}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button onClick={() => sendData(id)} variant="contained" color="primary">
            See More
          </Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
};

export default Data;