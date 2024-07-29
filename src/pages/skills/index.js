import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills } from "../../content_option";

export const Skills = (data) => {
  return (
    <Row className=" sec_sp">
      <Col lg="5">
        <h3 className="color_sec py-4">My Skills</h3>
      </Col>
      <Col lg="7">
        <table className="table caption-top">
          <tbody>
            {skills.map((data, i) => {
              return (
                <tr key={i}>
                  {console.log(data)}
                  <th scope="row"></th>
                  <td>{data.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
