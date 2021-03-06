import React from "react";
import { Div } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { ForecastItem } from "../ForecastItem";
import Button from "../Button";
import { Graph } from "../Graph";

export class Forecast extends React.Component {
    state = {
        isHourlyVisible: false
    };
    componentWillMount = () => {
        this.props.loadStart();
    };

    showHourly = () => {
        this.setState(
            prevState => ({
                ...prevState,
                isHourlyVisible: true
            }),
            () => {
                this.props.getHourlyStart();
            }
        );
    };

    hideHourly = e => {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            isHourlyVisible: false
        }));
    };

    render() {
        let { weeklyForecast, hourly } = this.props.weeklyForecast;
        return (
            <Div>
                {!weeklyForecast.length ? null : (
                    <Container>
                        <Row>
                            <Col>
                                {weeklyForecast.map((item, i) => {
                                    return <ForecastItem {...item} key={i} />;
                                })}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.showHourly}>
                                    Show Today's Hourly
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {!hourly.length ? null : (
                                    <Div>
                                        <Graph data={hourly} />
                                        <Button
                                            type="secondary"
                                            onClick={this.hideHourly}
                                        >
                                            hide
                                        </Button>
                                    </Div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                )}
            </Div>
        );
    }
}

/*
{!hourly.length ? null : (
    <Div>
        {hourly.map((item, i) => {
            let hour = item.FCTTIME.hour;
            let time =
                hour > 12 ? hour - 12 : hour;
            time = time === "0" ? "12" : time;
            let graphHeight = Math.ceil(
                item.temp.english /
                    100 *
                    100 *
                    2
            );
            return (
                <Div
                    key={i * 200}
                    css={{
                        display: "inline-block",
                        width: "60px",
                        backgroundColor:
                            "orange",
                        borderTop:
                            "2px solid darkgoldenrod",
                        height: graphHeight
                    }}
                />
            );
        })}
        <Button
            type="secondary"
            onClick={this.hideHourly}
        >
            hide
        </Button>
    </Div>
)}
*/
