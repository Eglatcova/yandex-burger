import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getCookie } from "../../utils/getCookie";
import { postToken } from "../../services/actions/user";

export function ProtectedRoute({ children, path, exact }) {
  const history = useHistory();
  const prevPath = history.location.pathname;

  const { auth } = useSelector((store) => ({
    auth: store.user.auth,
  }));

  const dispatch = useDispatch();

  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await dispatch(postToken(getCookie("token")));
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (!auth) {
    return <Redirect to={{ pathname: "/login", state: { from: prevPath } }} />;
  }

  return (
    <Route {...path} {...exact}>
      {children}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};
