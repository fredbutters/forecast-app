import React from "react";
import Button from "../Button";
import { theme } from "../../Providers/theme";
import glamorous, { Div, Span, Ul, Ol, Li, A, Input, H3 } from "glamorous";
import { Container, Row, Col } from "glamorous-grid";
import { InputCounter } from "../InputCounter";
import UserInfo from "../UserInfo";
import { Loading as WithLoader } from "../Loading";
import { LoadingSpinner } from "../LoadingSpinner";

const UserListItem = glamorous.span(
    {
        cursor: "pointer",
        textTransform: "capitalize",
        paddingBottom: "5px",
        display: "inline-block",
        ":hover": {
            color: "#999"
        }
    },
    ({ isSelected = false }) => ({
        color: isSelected ? "blue" : ""
    })
);

export class Users extends React.Component {
    state = {
        selectedUserId: null
    };
    componentWillMount() {
        this.props.loadStart();
    }

    handleSelectUser = user => {
        this.props.selectUser(user);
        this.setState({
            ...this.state,
            selectedUserId: user.id.value
        });
    };

    handleGetMoreUsers = () => {
        this.props.clearSelectedUser();
        this.props.getUsersStart();
    };

    handleIncrement = () => {
        let count = this.props.allUsers.userCount;
        let newValue = count >= 0 ? count : 0;
        newValue++;
        this.props.setUserCount(newValue);
    };

    handleDecrement = () => {
        let count = this.props.allUsers.userCount;
        let newValue = count >= 0 ? count : 0;
        newValue--;
        this.props.setUserCount(newValue);
    };

    handleChange(e) {
        this.props.setUserCount(e.target.value);
    }

    render() {
        let { users, selectedUser, userCount } = this.props.allUsers;

        return (
            <Container>
                <Row>
                    {!users.length ? (
                        <LoadingSpinner />
                    ) : (
                        <Col>
                            <H3>Select a User...</H3>
                            <Ol>
                                {users.map((user, i) => {
                                    return (
                                        <Li key={i}>
                                            <UserListItem
                                                isSelected={
                                                    user.id.value ===
                                                    this.state.selectedUserId
                                                }
                                                onClick={() =>
                                                    this.handleSelectUser(user)
                                                }
                                            >
                                                {`${user.name.title} ${
                                                    user.name.first
                                                } ${user.name.last}`}
                                            </UserListItem>
                                        </Li>
                                    );
                                })}
                            </Ol>
                            <InputCounter
                                wrapperCss={{ marginBottom: "10px" }}
                                buttonCss={theme.button.primary}
                                handleIncrement={() => this.handleIncrement()}
                                handleDecrement={() => this.handleDecrement()}
                                handleChange={e => this.handleChange(e)}
                                count={userCount}
                            />
                            <Button
                                type="secondary"
                                onClick={e => this.handleGetMoreUsers(e)}
                            >
                                Refresh Users List
                            </Button>
                        </Col>
                    )}
                    {!Object.keys(selectedUser).length ? null : (
                        <Col>
                            <UserInfo user={selectedUser} />
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}
