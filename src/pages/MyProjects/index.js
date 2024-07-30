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
        <div className="mb-3 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i}>
                <div className="po_item">
                  <img src={data.img} alt="" className="project-img" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>view project</a>
                  </div>
                </div>
                <p>{data.technicalStack}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
