import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { MyProjects } from "../pages/MyProjects";
import { About } from "../pages/about";
import { WorkingExperiences } from "../pages/workingexperiences";
import { Skills } from "../pages/skills";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/workexperiences" element={<WorkingExperiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
