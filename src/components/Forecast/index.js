import React from "react";
import glamorous, { Div, Span, Ul, Ol, Li, A, Input, H3 } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { ForecastItem } from "../ForecastItem";
import Button from "../Button";

const Hourly = glamorous.div({}, ({ isVisible = false }) => ({
    display: isVisible ? "block" : "none"
}));

export class Forecast extends React.Component {
    state = {
        isHourlyVisible: false
    };
    componentWillMount = () => {
        this.props.loadStart();
    };

    showHourly = day => {
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
        let { weeklyForecast } = this.props.weeklyForecast;
        return (
            <Container>
                {!weeklyForecast.length ? null : (
                    <Row>
                        <Col>
                            {weeklyForecast.map((item, i) => {
                                return (
                                    <ForecastItem
                                        {...item}
                                        key={i}
                                        handleClick={() =>
                                            this.showHourly(item.date.day)
                                        }
                                    />
                                );
                            })}
                        </Col>
                        <Col>
                            <Hourly isVisible={this.state.isHourlyVisible}>
                                Hourly stuff
                                <Button
                                    type="secondary"
                                    onClick={this.hideHourly}
                                >
                                    hide
                                </Button>
                            </Hourly>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}
