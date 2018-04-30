import React from "react";
import { connect } from "react-redux";
import { Button, Row } from "reactstrap";
import { setFilter } from "../flux/filter";
import PropTypes from "prop-types";

export function Filter({ dispatch }) {
    function handleClick(event) {
        dispatch(setFilter(event.target.value));
    }

    return (
        <Row>
            <Button
                outline
                color={"info"}
                onClick={handleClick}
                value={"SHOW_ALL"}
                id={"filter-show-all"}
            >
                Show all
            </Button>
            <Button
                outline
                color={"success"}
                onClick={handleClick}
                value={"SHOW_ACTIVE"}
                id={"filter-show-active"}
            >
                Show active
            </Button>
            <Button
                outline
                color={"secondary"}
                onClick={handleClick}
                value={"SHOW_COMPLETED"}
                id={"filter-show-completed"}
            >
                Show completed
            </Button>
        </Row>
    );
}

export default connect()(Filter);

Filter.propTypes = {
    dispatch: PropTypes.func.isRequired
};
