import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { history } from "./redux/create";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/edit/:id" component={Edit} />
          <Route path="/book/:id" component={Detail} />
          {/* 책 추가 */}
          <Route path="/add" component={Add} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
};

export default App;
