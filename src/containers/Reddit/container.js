import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { Reddit as RedditDumb } from "../../components/Reddit";

const mapStateToProps = ({ reddit }) => {
    let { data, isLoading, subRedditText, errorMessage, isError } = reddit;

    return {
        data,
        isLoading,
        subRedditText,
        errorMessage,
        isError
    };
};

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return { ...boundActionCreators, dispatch };
};

export const Reddit = connect(mapStateToProps, mapDispatchToProps)(RedditDumb);
