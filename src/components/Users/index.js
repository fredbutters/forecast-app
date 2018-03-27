import React from "react";
import Button from "../Button";
import glamorous, { Div, Span, Ul, Ol, Li, A, Input } from "glamorous";
import FontAwesome from "react-fontawesome";

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

const SelectedUserDiv = glamorous.div({
    textTransform: "capitalize"
});

const Loading = glamorous.div({
    height: "400px",
    textAlign: "center",
    fontSize: "42px",
    paddingTop: "200px"
});

const InputCounter = glamorous.input({
    padding: "5px"
});

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
    handleIncrementUserCount = e => {
        this.props.setUserCount(e.target.value);
    };

    render() {
        let { users, selectedUser, userCount } = this.props.allUsers;

        return (
            <Div>
                {!users.length ? (
                    <Loading>
                        <FontAwesome name="spinner" spin={true} />
                    </Loading>
                ) : (
                    <Div>
                        <Ol>
                            {users.map((user, i) => {
                                return (
                                    <Li key={i}>
                                        <UserListItem
                                            data-is-selected={
                                                user.id.value ===
                                                this.state.selectedUserId
                                            }
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
                        <Button
                            type="secondary"
                            onClick={e => this.handleGetMoreUsers(e)}
                        >
                            Refresh Users List
                        </Button>
                        <InputCounter
                            onChange={this.handleIncrementUserCount}
                            type="number"
                            defaultValue={userCount}
                            step="1"
                            min="1"
                            max="20"
                        />
                    </Div>
                )}
                {!Object.keys(selectedUser).length ? null : (
                    <SelectedUserDiv>
                        <Ul>
                            <Li>
                                <img src={selectedUser.picture.large} />
                            </Li>
                            <Li>
                                {" "}
                                Name:{" "}
                                {`${selectedUser.name.first} ${
                                    selectedUser.name.last
                                }`}
                            </Li>
                            <Li>
                                Login: <i>{selectedUser.login.username}</i>
                            </Li>
                            <Li>Email: {selectedUser.email}</Li>
                            <Li>{selectedUser.gender}</Li>
                        </Ul>
                    </SelectedUserDiv>
                )}
            </Div>
        );
    }
}
