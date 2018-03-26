import React from "react";
import { Div, Ul, Li } from "glamorous";

export class Users extends React.Component {
    componentWillMount() {
        this.props.loadStart();
    }
    render() {
        let { users } = this.props.users;

        return (
            <Div>
                {!users.length ? null : (
                    <Ul>
                        {users.map((user, i) => {
                            return (
                                <Li key={i}>
                                    {`${user.name.title} ${user.name.first} ${
                                        user.name.last
                                    }`}
                                </Li>
                            );
                        })}
                    </Ul>
                )}
            </Div>
        );
    }
}
