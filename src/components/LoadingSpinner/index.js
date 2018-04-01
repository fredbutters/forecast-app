import React from "react";
import glamorous, { Span } from "glamorous";
import FontAwesome from "react-fontawesome";

const Loading = glamorous.div({});

export const LoadingSpinner = props => (
    <Span css={props.css}>
        <FontAwesome name="spinner" spin={true} />
    </Span>
);
