import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
import SignIn from "./Pages/SignUpForm/SignUpForm";
import FormInput from "./Pages/FormInput/FormInput";

import routes from "./routes";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={routes.POSTS} component={News}></Route>
      <Route exact path={routes.POSTS_DETAILS} component={NewsDetails}></Route>
      <Route exact path={routes.SIGN_IN} component={SignIn}></Route>
      <Route path={routes.ADD_POSTS} component={FormInput}></Route>
      {/* <Route path={routes.MOVIE} component={MovieDetailsPage}></Route>
      <Route path={routes.SEARCH_MOVIES} component={MoviesPage}></Route>
      <Route component={NotFound} /> */}
    </Switch>
  </Layout>
);

export default App;
