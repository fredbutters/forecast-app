import React from "react";
import glamorous, { Div, Ul, Li } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { LoadingSpinner } from "../LoadingSpinner";
import Button from "../Button";

// export const Reddit = () => <Div>Subreddit</Div>;
export class Reddit extends React.Component {
    handleClick = e => {
        this.props.loadStart();
    };

    render() {
        let { data } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Div>Reddit Posts</Div>
                        <Button onClick={e => this.handleClick(e)}>
                            Click Me
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {!data.length ? (
                            <Div>
                                <LoadingSpinner />
                            </Div>
                        ) : (
                            <Ul>
                                {data.map(post => (
                                    <Li key={post.id}>{post.title}</Li>
                                ))}
                            </Ul>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}
