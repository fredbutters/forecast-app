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
// export const InputCounter = props => {
//     return (
//         <Div css={props.wrapperCss}>
//             <Input
//                 css={{ padding: "5px", width: "100px" }}
//                 type="text"
//                 defaultValue={props.count}
//                 value={props.count}
//                 onChange={e => props.handleChange(e)}
//             />
//             <CounterButton
//                 onClick={props.handleIncrement}
//                 css={props.buttonCss}
//             >
//                 <FontAwesome name="plus" />
//             </CounterButton>
//             <CounterButton
//                 onClick={props.handleDecrement}
//                 css={props.buttonCss}
//             >
//                 <FontAwesome name="minus" />
//             </CounterButton>
//         </Div>
//     );
// };

export class InputCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        count: this.props.count
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 }, () =>
            this.props.updateCount(this.state.count)
        );
    };

    handleDecrement = () => {
        this.setState({ count: Math.max(this.state.count - 1, 1) }, () =>
            this.props.updateCount(this.state.count)
        );
    };
    handleChange(e) {
        let newCount = e.target.value ? parseInt(e.target.value, 10) : 0;
        this.setState({ count: newCount }, () =>
            this.props.updateCount(newCount)
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
            </Div>
        );
    }
}
