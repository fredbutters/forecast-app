import React from "react";
import glamorous, { Div, P } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { Modal } from "../../components/Modal";
import { theme } from "../../Providers";
import Button from "../../components/Button";

export class Home extends React.Component {
    state = {
        show: false
    };
    toggleModal = () => {
        this.setState(prevState => ({
            ...prevState,
            show: !this.state.show
        }));
    };
    submit = () => {
        alert("submit form!");
    };
    render() {
        const { show } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Modal
                            title="Modal Title"
                            show={this.state.show}
                            handleClose={this.toggleModal}
                            handleSubmit={this.submit}
                        >
                            <P>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </P>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.toggleModal}>Show Modal</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
