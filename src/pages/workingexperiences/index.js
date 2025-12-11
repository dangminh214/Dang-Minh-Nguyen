import "./style.css";
import { Row, Col } from "react-bootstrap";
import { worktimeline } from "../../contents";

export const WorkingExperiences = () => {
  return (
    <Row className="sec_sp">
      <Col lg="5">
        <h3 className="color_sec py-4">Work Timeline</h3>
      </Col>

      <Col lg="7">
        <table className="table caption-top">
          <tbody>
            {worktimeline.map((item, i) => (
              <tr key={i}>
                <th scope="row" className="p-3">
                  {item.jobtitle}
                </th>

                <td className="p-3">
                  <div className="fw-bold">{item.where}</div>
                  <div>{item.date}</div>

                  {/* Description là array */}
                  {Array.isArray(item.description) &&
                    item.description.map((line, idx) => (
                      <p key={idx}>
                        {line}
                      </p>
                    ))}

                  {/* Technical stack */}
                  {item.technicalStack && (
                    <p className="text-white">
                      <strong>Technical Stack:</strong> {item.technicalStack}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
