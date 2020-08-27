import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
import SignIn from "./Pages/SignUpForm/SignUpForm";

import routes from "./routes";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={routes.POSTS} component={News}></Route>
      <Route path={routes.POSTS_DETAILS} component={NewsDetails}></Route>
      <Route path={routes.SIGN_IN} component={SignIn}></Route>
      {/* <Route exact path={routes.HOME} component={HomePage}></Route>
      <Route path={routes.MOVIE} component={MovieDetailsPage}></Route>
      <Route path={routes.SEARCH_MOVIES} component={MoviesPage}></Route>
      <Route component={NotFound} /> */}
    </Switch>
  </Layout>
);

export default App;
