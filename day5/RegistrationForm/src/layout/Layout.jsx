import React from 'react'
import {Outlet, ScrollRestoration} from "react-router-dom"
import { Wrapper } from './Layout.styled';
const Layout = () => {

   let getKey = React.useCallback(
    (location, matches) => {
      let match = matches.find((m) => (m.handle)?.scrollMode);
      if ((match?.handle)?.scrollMode === "pathname") {
        return location.pathname;
      }
      return location.key;
    },
    []
  );
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <ScrollRestoration getKey={getKey} />
    </>
  );
}

export default Layout