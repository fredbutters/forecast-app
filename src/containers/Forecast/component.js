import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Forecast as ForecastDumb } from "../../components/Forecast";
import * as actions from "./actions";

const mapStateToProps = ({ weeklyForecast }) => ({
    weeklyForecast: weeklyForecast
});

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    const allActions = { ...boundActionCreators, dispatch };
    return allActions;
};

export const Forecast = connect(mapStateToProps, mapDispatchToProps)(
    ForecastDumb
);
