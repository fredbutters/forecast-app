import React from "react";
import glamorous from "glamorous";
import FontAwesome from "react-fontawesome";

const Loading = glamorous.div({
    height: "400px",
    textAlign: "center",
    fontSize: "42px",
    paddingTop: "200px"
});

export const LoadingSpinner = () => (
    <Loading>
        <FontAwesome name="spinner" spin={true} />
    </Loading>
);
