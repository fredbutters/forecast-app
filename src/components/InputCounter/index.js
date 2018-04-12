import React from "react";
import glamorous, { Input, Button, Div } from "glamorous";
import FontAwesome from "react-fontawesome";
import { theme } from "../../Providers/theme";

const CounterButton = glamorous.button(
    {
        padding: "5px 15px",
        cursor: "pointer"
    },
    ({ isDisabled = false }) => ({
        pointerEvents: isDisabled ? "none" : ""
    })
);

const MinCountWarning = glamorous.div(
    {
        color: theme.color.danger
    },
    ({ warn = false }) => ({
        display: warn ? "block" : "none"
    })
);

export class InputCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        count: this.props.count,
        minCount: this.props.minCount || 1,
        isCountWarning: false
    };

    handleIncrement = () => {
        this.setState(
            { count: this.state.count + 1, isCountWarning: false },
            () => this.props.updateCount(this.state.count)
        );
    };

    handleDecrement = () => {
        this.setState(
            {
                count: Math.max(this.state.count - 1, this.state.minCount),
                isCountWarning: false
            },
            () => this.props.updateCount(this.state.count)
        );
    };
    handleChange(e) {
        // input must be a number and greater than 0
        // if input <= minCount, show warning
        let val = e.target.value;
        let newCount = isNaN(val)
            ? this.state.minCount
            : Math.max(this.state.minCount, parseInt(val, 10));

        this.setState(
            { count: newCount, isCountWarning: val <= this.state.minCount },
            () => this.props.updateCount(newCount)
        );
    }
    render() {
        return (
            <Div css={{ marginBottom: "10px" }}>
                <Input
                    css={{ padding: "5px", width: "100px" }}
                    type="text"
                    defaultValue={this.props.count}
                    value={this.props.count}
                    onChange={e => this.handleChange(e)}
                />
                <CounterButton
                    onClick={() => this.handleIncrement()}
                    css={theme.button.primary}
                >
                    <FontAwesome name="plus" />
                </CounterButton>
                <CounterButton
                    onClick={() => this.handleDecrement()}
                    css={theme.button.primary}
                    isDisabled={this.state.count === 1}
                >
                    <FontAwesome name="minus" />
                </CounterButton>
                <MinCountWarning
                    warn={this.state.isCountWarning}
                >{`Minimum count: ${this.state.minCount}`}</MinCountWarning>
            </Div>
        );
    }
}
