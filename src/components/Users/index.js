import React from "react";
import Button from "../Button";
import glamorous, { Div, Span, Ul, Li, A } from "glamorous";
import FontAwesome from "react-fontawesome";

const UserListItem = glamorous.span({
    cursor: "pointer",
    textTransform: "capitalize",
    paddingBottom: "5px",
    display: "inline-block",
    ":hover": {
        color: "#999"
    }
});

const SelectedUserDiv = glamorous.div({
    textTransform: "capitalize"
});

const Loading = glamorous.div({
    height: "400px",
    textAlign: "center",
    fontSize: "42px",
    paddingTop: "200px"
});

export class Users extends React.Component {
    componentWillMount() {
        this.props.loadStart();
    }
    handleSelectUser = user => {
        this.props.selectUser(user);
    };
    handleGetMoreUsers = () => {
        console.log("get more!");
    };
    render() {
        let { users, selectedUser } = this.props.allUsers;

        return (
            <Div>
                {!users.length ? (
                    <Loading>
                        <FontAwesome name="spinner" spin="true" />
                    </Loading>
                ) : (
                    <Div>
                        <Ul>
                            {users.map((user, i) => {
                                return (
                                    <Li key={i}>
                                        <UserListItem
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
                        </Ul>
                        <Button
                            type="secondary"
                            onClick={() => this.handleGetMoreUsers()}
                        >
                            Get More Users
                        </Button>
                    </Div>
                )}
                {!Object.keys(selectedUser).length ? null : (
                    <Span>
                        You selected:
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
                                <Li>Email: {selectedUser.email}</Li>
                            </Ul>
                        </SelectedUserDiv>
                    </Span>
                )}
            </Div>
        );
    }
}
