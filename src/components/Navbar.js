import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  const [active, setActive] = useState('');
  console.log(active);
  return (
    <>
      <Nav variant="tabs" activeKey={active}>
        <Nav.Item onClick={() => setActive('todo')}>
          <Nav.Link href="/todo" eventKey="todo">
            Todo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActive('basketballTeam')}>
          <Nav.Link href="/basketballTeam" eventKey="basketballTeam">
            BasketballTeam
          </Nav.Link>
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
