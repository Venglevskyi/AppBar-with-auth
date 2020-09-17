import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Comments from "../../Components/Comments/Comments";
import { fetchNewsById } from "../../services/api";
import { useStyles } from "../News/styles";

const NewsDetails = ({ match, location }) => {
  const { postsId } = match.params;
  const [news, setNews] = useState({});
  useEffect(() => {
    fetchNewsById(postsId)
      .then((data) => setNews(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyles();
  return (
    <main>
      <ul className={classes.cardContainer}>
        <Card className={classes.card} variant="outlined" component="li">
          <CardContent className={classes.root}>
            <Typography
              className={classes.title}
              color="textSecondary"
              component="h2"
            >
              {news.title}
            </Typography>

            <Typography color="textSecondary" component="p">
              {news.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`${match.url}/comments`}>Comments</Link>
            </Button>
          </CardActions>
        </Card>
        <Route path={`${match.path}/comments`} component={Comments}></Route>
        {/* <article className={newsCard}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
      <Link to={`${match.url}/comments`}>Comments</Link>
      <Route path={`${match.path}/comments`} component={Comments}></Route> */}
      </ul>
    </main>
  );
};

export default NewsDetails;
