import React from "react";
import glamorous, { Div, Ul, Li } from "glamorous";

const UserInfo = ({ user }) => {
    return (
        <Div css={{ textTransform: "capitalize" }}>
            <Ul>
                <Li>
                    <img src={user.picture.large} />
                </Li>
                <Li> Name: {`${user.name.first} ${user.name.last}`}</Li>
                <Li>
                    Login: <i>{user.login.username}</i>
                </Li>
                <Li>Email: {user.email}</Li>
                <Li>{user.gender}</Li>
            </Ul>
        </Div>
    );
};
export default UserInfo;
