import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function validar() {
    return usuario.length > 0 && senha.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="usuario">
          <Form.Label>usuario</Form.Label>
          <Form.Control
            autoFocus
            type="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="senha">
          <Form.Label>senha</Form.Label>
          <Form.Control
            type="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Button block="true" size="lg" type="submit" disabled={!validar()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login