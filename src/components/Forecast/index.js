import React from "react";
import glamorous, { Div, Span, Ul, Ol, Li, A, Input, H3, Img } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { ForecastItem } from "../ForecastItem";
import { Temp } from "../Temperature";
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
        let { weeklyForecast, hourly } = this.props.weeklyForecast;
        return (
            <Div>
                {!weeklyForecast.length ? null : (
                    <Container>
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
                        </Row>
                        <Row>
                            <Col>
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
                                                >
                                                    {/* <Span
                                                        css={{
                                                            width: "100%",
                                                            display:
                                                                "inline-block"
                                                        }}
                                                    >
                                                        {item.temp.english}
                                                    </Span> */}
                                                </Div>
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
                            </Col>
                        </Row>
                    </Container>
                )}
            </Div>
        );
    }
}

/*
<Span
                                                    css={{
                                                        display: "inline-block",
                                                        marginBottom: "10px",
                                                        marginRight: "10px"
                                                    }}
                                                    key={i}
                                                >
                                                    <Div
                                                        css={{
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        <Img
                                                            src={item.icon_url}
                                                            height="25"
                                                            width="25"
                                                        />
                                                    </Div>
                                                    <Temp>
                                                        {item.temp.english}
                                                    </Temp>
                                                    <Span>
                                                        {`${time} ${
                                                            item.FCTTIME.ampm
                                                        }`}
                                                    </Span>
                                                </Span>
                                                */
