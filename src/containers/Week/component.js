import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Week as WeekDumb } from "../../components/Week";
import * as actions from "./actions";
// import { loadStart } from "./actions";

const mapStateToProps = ({ weeklyForecast }) => ({
    weeklyForecast: weeklyForecast
});

// const mapStateToProps = state => ({
//     ...state
// });

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    const allActions = { ...boundActionCreators, dispatch };
    return allActions;
};

export const Week = connect(mapStateToProps, mapDispatchToProps)(WeekDumb);
