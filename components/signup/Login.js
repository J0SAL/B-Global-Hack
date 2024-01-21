import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUnlockAlt,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import authContext from "../../hooks/AuthContext/authContext";

const initData = {
  user_name: "",
  environment: "",
};

function Login() {
  const { login } = useContext(authContext);
  const [formData, setFormData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const canSubmit =
    formData.user_name.length > 0 &&
    formData.environment.length > 0 &&
    !loading;
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      e.target.reset();
      await login(formData);
      setFormData(initData);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Form.Group id="user_name" className="mb-4">
          <Form.Label>Your Name</Form.Label>
          <InputGroup>
            <InputGroup.Text className="px-2">
              <FontAwesomeIcon icon={faUser} style={{ width: "15px" }} />
            </InputGroup.Text>
            <Form.Control
              autoFocus
              required
              name="user_name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group id="environment" className="mb-4">
          <Form.Label>Environment</Form.Label>

          <InputGroup>
            <InputGroup.Text className="px-2">
              <FontAwesomeIcon icon={faUnlockAlt} style={{ width: "15px" }} />
            </InputGroup.Text>
            <Form.Control
              required
              name="environment"
              type="text"
              placeholder="Environment"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={!canSubmit}
            >
              Login
            </Button>
          </Col>
          {loading && (
            <Col xs={1}>
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            </Col>
          )}
        </Row>
      </Form>
    </div>
  );
}

export default Login;
