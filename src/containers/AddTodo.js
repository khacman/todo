import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input } from "reactstrap";
import PropTypes from "prop-types";
import { addTodo } from "../flux/todos";

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            dispatch: props.dispatch
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.dispatch(addTodo(this.state.value));
        this.setState({
            ...this.state,
            value: ""
        });
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input
                        type={"text"}
                        name={"todo"}
                        id={"newTodo"}
                        placeholder={"Pickup pop"}
                        required={true}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type={"submit"} color={"primary"}>
                    Add todo
                </Button>
            </Form>
        );
    }
}

export default connect()(AddTodo);

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
};
