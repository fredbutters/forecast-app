import React from "react";
import glamorous, { Input, Button, Div } from "glamorous";
import FontAwesome from "react-fontawesome";

const CounterButton = glamorous.button({
    padding: "5px 15px",
    cursor: "pointer"
});
export const InputCounter = props => {
    return (
        <Div css={props.wrapperCss}>
            <Input
                css={{ padding: "5px", width: "100px" }}
                type="text"
                defaultValue={props.count}
                value={props.count}
                onChange={e => props.handleChange(e)}
            />
            <CounterButton
                onClick={props.handleIncrement}
                css={props.buttonCss}
            >
                <FontAwesome name="plus" />
            </CounterButton>
            <CounterButton
                onClick={props.handleDecrement}
                css={props.buttonCss}
            >
                <FontAwesome name="minus" />
            </CounterButton>
        </Div>
    );
};
