import React from "react";
import FontAwesome from "react-fontawesome";

export const Loading = Component => ({
    isLoading,
    message = "hi there",
    ...props
}) => {
    if (!isLoading) {
        return <Component {...props} />;
    }
    return <FontAwesome name="spinner" spin={true} />;
};
