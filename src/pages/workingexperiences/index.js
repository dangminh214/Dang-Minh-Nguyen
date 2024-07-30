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
                <div key={i}>
                  <tr>
                    <th scope="row" className="p-3">
                      {data.jobtitle}
                    </th>
                    <td className="p-3">{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                  <p className="text-white">{data.description}</p>
                  <p className="text-white">
                    Technical Stack: {data.technicalStack}
                  </p>
                </div>
              );
            })}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
