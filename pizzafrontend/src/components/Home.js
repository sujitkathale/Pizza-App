import React from 'react'
import { Container,Card,Button} from 'react-bootstrap'
import Nav1 from './Nav1'
export default function Home() {
    return (
        <Container>
            <Nav1/>
            <Card className="mt-4">
                <Card.Header><h1>Pizza Delivery</h1>
                <p>Welcome to pizza delivery place .This is the place when you may choose the most delicious pizza you like from wide variety of options</p></Card.Header>
                <Card.Body>
                    
                    <Card.Text>
                   We're performing delivery free of charge in case if your order is highrer than 20$
                    </Card.Text>
                    <div className="d-grid gap-2">
                    
                    <Button variant="primary" size="lg" href="/register">Sign In and Order</Button>
                </div>
                </Card.Body>
                </Card>
        </Container>
    )
}
