import React from "react";
import {
  RouteComponentProps,
  RouteProps,
  withRouter,
  Route,
} from "react-router-dom";
import { Container as UIContainer } from "@material-ui/core";

interface ContainerProps extends RouteComponentProps {
  routes: RouteProps[];
}

const Containter: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <>
      <UIContainer maxWidth="md">
        {props.routes.map((route: RouteProps) => {
          return <Route key={`${route.path}`} {...route} />;
        })}
      </UIContainer>
    </>
  );
};

export default withRouter(Containter);
