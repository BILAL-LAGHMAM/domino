import React from "react";
import { Button, Card, Container, ListGroup, Row } from "react-bootstrap";
export default class Domino extends React.Component {
    constructor() {
        super()
        this.state = { face: 0, essay: 0 }
    }
    find = () => {
        const RandomNumber = Math.floor(Math.random() * 6 + 1)
        if (this.state.face === this.props.cache) {
            this.setState({ face: this.state.face })
        } else {
            this.setState({ face: RandomNumber, essay: this.state.essay + 1 })
        }
    }
    reset = () => {
        this.setState({ face: 0, essay: 0 })
    }
    render() {
        return (
            <>
                <Container className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Card style={{ width: '18rem',height:'max-content' }} >
                            <Card.Img variant="top" src={`imgs/${this.state.face}.png`} />
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Random Face: {this.state.face !== this.props.cache ? this.state.face : this.state.face}</ListGroup.Item>
                                    <ListGroup.Item>Numbre essay: {this.state.essay}</ListGroup.Item>
                                    <ListGroup.Item>{this.state.face === this.props.cache ? "Good! You find Number Cache" : "????"}</ListGroup.Item>
                                </ListGroup>
                                {this.state.face === this.props.cache ? <Button variant="primary" onClick={this.reset}>reset</Button> : <Button variant="primary" onClick={this.find}>Find It</Button>}
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        )
    }
}