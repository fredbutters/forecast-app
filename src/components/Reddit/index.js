import React from "react";
import glamorous, { Div, H2, Ul, Li, Input } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { LoadingSpinner } from "../LoadingSpinner";
import Button from "../Button";

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
        let { data, isLoading } = this.props;
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
                        {!data.length ? null : (
                            <Div>
                                <H2>{`/r/${this.props.subRedditText}`}</H2>
                                <Ul>
                                    {data.map(post => (
                                        <Li key={post.id}>{post.title}</Li>
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
