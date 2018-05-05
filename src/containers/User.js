import React from "react";
import { connect } from "react-redux";
import { Button, Row } from "reactstrap";
import PropTypes from "prop-types";
import { getUser } from "../flux/user";

export function User({ dispatch, user }) {
    function handleClick() {
        dispatch(getUser());
    }

    return (
        <Row>
            <Button
                outline
                color={"info"}
                onClick={handleClick}
                id={"get-user"}
            >
                Get user
            </Button>
            <p>
                {user.userData.id} : {user.userData.name}
            </p>
        </Row>
    );
}

export function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(User);

User.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        userData: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            language: PropTypes.string
        })
    })
};
