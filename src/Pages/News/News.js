import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import { fetchNews } from "../../services/api";
import { useStyles } from "./styles";

const News = ({ match }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetchNews()
      .then((data) => setNews(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const classes = useStyles();

  return (
    <main>
      {loading && <LinearProgress color="primary" />}

      <ul className={classes.cardContainer}>
        {news.map(({ body, title, id }) => (
          <Card
            className={classes.card}
            variant="outlined"
            component="li"
            key={id}
          >
            <CardContent className={classes.root}>
              <Typography
                className={classes.title}
                color="textSecondary"
                component="h2"
              >
                {title}
              </Typography>

              <Typography color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`${match.url}/${id}`}>Details</Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </ul>
    </main>
  );
};

export default News;
