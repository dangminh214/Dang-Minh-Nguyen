import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../contents";

export const MyProjects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
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
                <p className="project-name">
                  {i + 1}. &nbsp;{data.name}
                </p>
                <div className="po_item">
                  <div className="project-img-container">
                    <img src={data.img} alt="" className="project-img" />
                  </div>
                  <div className="content">
                    <p>{data.description}</p>
                    {<a href={data.linkGithub}>View</a>}
                  </div>
                </div>
                <p className="technical-stack">
                  Repostiory: <a href={data.linkGithub}>{data.linkGithub}</a>
                </p>
                <p className="technical-stack">{data.description0}</p>
                <p className="technical-stack">{data.description1}</p>
                <p className="technical-stack">{data.description2}</p>
                <p className="technical-stack">{data.description3}</p>
                <p className="technical-stack">{data.description4}</p>
                <p className="technical-stack">{data.description5}</p>
                <p className="technical-stack">{data.description6}</p>
                <p className="technical-stack">{data.description7}</p>
                <p className="technical-stack">{data.technicalStack}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
