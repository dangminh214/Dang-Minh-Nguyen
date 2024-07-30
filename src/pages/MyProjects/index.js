import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const MyProjects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> My Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="projects-container">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="project-card">
                <div className="po_item">
                  <div className="project-img-container">
                    <img src={data.img} alt="" className="project-img" />
                  </div>
                  <div className="content">
                    <p>{data.description}</p>
                    {i !== 1 && <a href={data.link}>view project</a>}
                  </div>
                </div>
                <p className="technical-stack">{data.technicalStack}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
