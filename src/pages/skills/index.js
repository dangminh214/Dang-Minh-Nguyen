import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { skills } from "../../content_option";

const formatCategoryName = (name) => {
  if (name === "VersionControl") {
    return "Version Control";
  }
  if (name === "ProgrammingLanguages") {
    return "Programming Languages";
  }
  return name;
};

export const Skills = () => {
  return (
    <Row className="sec_sp">
      <Col lg="5">
        <h3 className="color_sec py-4">My Skills</h3>
      </Col>
      <Col lg="7">
        <table className="table caption-top">
          <tbody>
            {skills.map((category, i) => {
              const categoryName = Object.keys(category)[0];
              const categorySkills = category[categoryName];
              return (
                <tr key={i}>
                  <th scope="row">{formatCategoryName(categoryName)}</th>
                  <td>
                    {categorySkills.map((skill, j) => (
                      <span key={j} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
