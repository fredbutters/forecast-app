import React from "react";
import glamorous, { Div, A, H2, Ul, Li, Input } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { LoadingSpinner } from "../LoadingSpinner";
import Button from "../Button";

const ErrorMessage = glamorous.div(
    {
        color: "red",
        fontStyle: "italic"
    },
    ({ isVisible = false }) => ({
        display: isVisible ? "block" : "none"
    })
);

export class Reddit extends React.Component {
    state = {
        inputText: ""
    };
    handleClick = e => {
        this.props.setSubRedditText(this.state.inputText);
        this.props.loadStart();
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            inputText: e.target.value
        });
    };

    render() {
        let { data, isLoading, isError } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Div>Reddit Posts</Div>
                        <Input
                            onChange={e => this.handleChange(e)}
                            placeholder="Enter subreddit name"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={e => this.handleClick(e)}>
                            Click Me
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LoadingSpinner
                            css={{ fontSize: "32px" }}
                            isVisible={isLoading}
                        />
                        <ErrorMessage isVisible={isError}>
                            {this.props.errorMessage}
                        </ErrorMessage>
                        {!data.length ? null : (
                            <Div>
                                <H2>{`/r/${this.props.subRedditText}`}</H2>
                                <Ul>
                                    {data.map(post => (
                                        <Li key={post.id}>
                                            <A href={post.url} target="_blank">
                                                {post.title}
                                            </A>
                                        </Li>
                                    ))}
                                </Ul>
                            </Div>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}
