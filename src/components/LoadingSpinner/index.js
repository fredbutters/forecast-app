import React from "react";
import glamorous, { Span } from "glamorous";
import FontAwesome from "react-fontawesome";

const Loading = glamorous.span({}, ({ isVisible }) => ({
    display: isVisible ? "block" : "none"
}));

export const LoadingSpinner = props => (
    <Loading css={props.css} isVisible={props.isVisible}>
        <FontAwesome name="spinner" spin={true} />
    </Loading>
);
