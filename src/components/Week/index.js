import React from "react";
import glamorous from "glamorous";
import { Forecast } from "../Forecast";
import Button from "../Button";

const Hourly = glamorous.div({}, ({ isVisible = false }) => ({
    display: isVisible ? "block" : "none"
}));

export class Week extends React.Component {
    state = {
        isHourlyVisible: false,
        hourly: []
    };
    componentWillMount = () => {
        this.props.loadStart();
    };

    showHourly = day => {
        this.setState(prevState => ({
            ...prevState,
            isHourlyVisible: true,
            hourly: this.props.hourly
        }));
    };

    hideHourly = e => {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            isHourlyVisible: false,
            hourly: []
        }));
    };

    render() {
        let { weeklyForecast } = this.props.weeklyForecast;
        return (
            <div>
                {!weeklyForecast.length ? null : (
                    <div>
                        {weeklyForecast.map((index, i) => {
                            return (
                                <Forecast
                                    {...index}
                                    key={i}
                                    handleClick={this.showHourly.bind(
                                        this,
                                        index.day
                                    )}
                                />
                            );
                        })}
                        <Hourly isVisible={this.state.isHourlyVisible}>
                            Hourly stuff
                            {this.state.hourly.map((item, i) => {
                                return <div key={i}>test</div>;
                            })}
                            <Button type="secondary" onClick={this.hideHourly}>
                                hide
                            </Button>
                        </Hourly>
                    </div>
                )}
            </div>
        );
    }
}
