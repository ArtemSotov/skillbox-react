import { hot } from "react-hot-loader/root";

import * as React from "react";

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for own</h1>
      <p>Hello people</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);
