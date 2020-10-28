// import React from "react";
import { withRedux } from "../utils/with-redux-store";

function Layout({ children }) {
  return <div>{children}</div>;
}

export default withRedux(Layout);
