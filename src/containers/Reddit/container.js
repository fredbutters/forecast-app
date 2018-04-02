import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { Reddit as RedditDumb } from "../../components/Reddit";

const mapStateToProps = state => ({
    data: state.reddit.data,
    isLoading: state.reddit.isLoading,
    subRedditText: state.reddit.subRedditText
});

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return { ...boundActionCreators, dispatch };
};

export const Reddit = connect(mapStateToProps, mapDispatchToProps)(RedditDumb);
