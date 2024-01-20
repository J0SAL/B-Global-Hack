import Link from "next/link";
import React from "react";
import { Button, Dropdown, Nav, Table } from "react-bootstrap";

var ruleset_data = [
  {
    version: "2.1.1",
    status: "Draft",
    lastmodifiedby: "Joy Almieda",
    lastmodifieddate: "2023-12-22 08:56:36",
    options: ["Edit Ruleset", "View change log", "Reset working copy"],
  },
  {
    version: "2.1.0",
    status: "Champion",
    lastmodifiedby: "Omkar Pavtekar",
    lastmodifieddate: "2023-05-26 07:53:36",
    options: ["View Ruleset", "View change log"],
  },
  {
    version: "2.0.1",
    status: "Previously Deployed",
    lastmodifiedby: "Sagarika Matey",
    lastmodifieddate: "2023-01-10 08:56:36",
    options: ["View Ruleset", "View change log"],
  },
];

function RulesTable() {
  return (
    <div>
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
          {ruleset_data.map((item, index) => (
            <tr key={index}>
              <td>{item.version}</td>
              <td>{item.status}</td>
              <td>{item.lastmodifiedby}</td>
              <td>{item.lastmodifieddate}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {item.options.map((link, key) => (
                      <Link href="/edit-ruleset" passHref>
                        <Dropdown.Item>{link}</Dropdown.Item>
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
