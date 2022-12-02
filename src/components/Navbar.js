import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <>
      <Nav variant="tabs" activeKey="/todo">
        <Nav.Item>
          <Nav.Link href="/todo">Todo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
