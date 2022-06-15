import React from "react";
import { Route, Routes } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { History } from "history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      {/* react router v6 */}
      <ConnectedRouter element={<History />}>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          {/* 책 추가 */}
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          {/* 낫파운드 v6 적용 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
