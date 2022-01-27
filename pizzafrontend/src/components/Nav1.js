import React from 'react'
import { Container,Nav } from 'react-bootstrap'

export default function Nav1() {
    return (
        <Container>
             <Nav className="justify-content-between" activeKey="/home">
                    <Nav.Item><img src="/images/pizza_logo1.png" width="100" height="70" alt="logo" /></Nav.Item>
                    <Nav>
                    <Nav.Item> 
                    <Nav.Link href="/register" className="btn btn-outline-primary mt-3 m-2">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/login" className="btn btn-outline-primary mt-3 m-2">Login</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Nav>
        </Container>
    )
}
