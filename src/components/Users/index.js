import React from "react";
import glamorous, { Div, Span, Ul, Li, A } from "glamorous";

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

export class Users extends React.Component {
    componentWillMount() {
        this.props.loadStart();
    }
    handleClick = user => {
        this.props.selectUser(user);
    };
    render() {
        let { users, selectedUser } = this.props.allUsers;

        return (
            <Div>
                {!users.length ? null : (
                    <Ul>
                        {users.map((user, i) => {
                            return (
                                <Li key={i}>
                                    <UserListItem
                                        onClick={() => this.handleClick(user)}
                                    >
                                        {`${user.name.title} ${
                                            user.name.first
                                        } ${user.name.last}`}
                                    </UserListItem>
                                </Li>
                            );
                        })}
                    </Ul>
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
