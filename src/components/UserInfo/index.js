import React from "react";
import glamorous, { Div, Ul, Li, H3 } from "glamorous";

const LiCap = glamorous.li({
    textTransform: "capitalize"
});

const UserInfo = ({ user }) => {
    let dobDate = new Date(user.dob);
    let dob = dobDate.toLocaleDateString();
    return (
        <Div>
            <H3 css={{ textTransform: "capitalize" }}>{`${user.name.first} ${
                user.name.last
            }`}</H3>
            <img src={user.picture.large} alt="user profile" />
            <Ul>
                <Li>
                    Username:<i>{user.login.username}</i>
                </Li>
                <Li>Email: {user.email}</Li>
                <LiCap>{`${user.location.city}, ${user.location.state}`}</LiCap>
                <LiCap>{user.gender}</LiCap>
                <Li>DOB: {dob}</Li>
            </Ul>
        </Div>
    );
};
export default UserInfo;
