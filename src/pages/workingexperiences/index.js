import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { worktimeline } from "../../content_option";

export const WorkingExperiences = (data) => {
  return (
    <Row className=" sec_sp">
      <Col lg="5">
        <h3 className="color_sec py-4">Work Timline</h3>
      </Col>
      <Col lg="7">
        <table className="table caption-top">
          <tbody>
            {worktimeline.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{data.jobtitle}</th>
                  <td>{data.where}</td>
                  <td>{data.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
