import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return { ...boundActionCreators, dispatch };
};
