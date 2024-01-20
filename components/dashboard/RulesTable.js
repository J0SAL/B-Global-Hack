import Link from "next/link";
import { Button, Dropdown, Nav, Table } from "react-bootstrap";
import { exportToJson } from "../../utils";

function RulesTable({ rulesetData }) {
  return (
    <div
      style={{
        height: "32vh",
        overflowY: "scroll",
      }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ruleset Version</th>
            <th>Status</th>
            <th>Last modified by</th>
            <th>Last modified date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rulesetData.map((ruleset_item, index) => (
            <tr key={index}>
              <td>{ruleset_item.version}</td>
              <td>{ruleset_item.status}</td>
              <td>{ruleset_item.lastmodifiedby}</td>
              <td>{ruleset_item.lastmodifieddate}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => exportToJson(ruleset_item)}>
                      Download
                    </Dropdown.Item>
                    {ruleset_item.options.map((link, key) => (
                      <Link
                        href={{
                          pathname: link.link ?? "#",
                          query: { id: ruleset_item.id },
                        }}
                        key={key}
                        passHref
                      >
                        <Dropdown.Item>{link.name}</Dropdown.Item>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RulesTable;
