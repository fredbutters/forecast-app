import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Week as WeekDumb } from "../../components/Week";
import * as actions from "../../actions";

const mapStateToProps = state => {
    return { week: state.weekReducer.week }; //don't return everything
};

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    const allActions = { ...boundActionCreators, dispatch };
    return allActions;
};

export const Week = connect(mapStateToProps, mapDispatchToProps)(WeekDumb);
