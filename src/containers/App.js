import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";
import { Container, Row } from "reactstrap";
import Filter from "./Filters";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1>My todo app</h1>
                </Row>
                <Row>
                    <AddTodo />
                </Row>
                <Row>
                    <VisibleTodoList />
                </Row>
                <Filter />
            </Container>
        );
    }
}
